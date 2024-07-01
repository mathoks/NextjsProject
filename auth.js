import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
//import prisma from "@/models/model";
import Credentials from "next-auth/providers/credentials";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import {encode, decode} from 'next-auth/jwt'
import { fromDate } from "./app/lib/utills/expiration";
import Cookies from "cookies";
import { authConfig } from "./auth.cofig";
import { NextResponse as res } from "next/server";
import { nanoid } from "@reduxjs/toolkit";

const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);
const prisma = new PrismaClient({ adapter });

const providers = [
  Google({
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
  Credentials({
    credentials: {
      password: { label: "Password", type: "password" },
      email: { label: "email", type: "email" },
    },
    async authorize(c) {
      try {
        const User = await prisma.user.findUnique({
          where: {
            email: c.email,
          },
        });

        if (!User && !User?.password){
          throw new Error(JSON.stringify("user does not exist"))
        } 
          const match = bcrypt.compare(c.password, User?.password);
          if (!match) {
            throw new Error(JSON.stringify("password does not match"))
          }

        return {
              id: User.id,
              email: User.email,
              name: User.name,
              image: User.image
            };
       
      } catch (error) {
        throw error;
      }
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});


export const {auth, handlers, signIn, signOut }= NextAuth(req => {
  
  return {
    adapter: PrismaAdapter(prisma),
    ...authConfig,
    providers,
    session: {
    strategy: "jwt",
  },
//   jwt:  {
//      encode: async function({maxAge, token, salt, secret }){ 
//      if(token?.credentials){
//       const sessionToken = crypto.randomUUID()
//       const expiryDate = fromDate(maxAge)
//       const createSession =  await PrismaAdapter(prisma).createSession({sessionToken, userId: token?.sub , expires: expiryDate})
//       if(createSession){
//         const response = res.next()
//         response.cookies.set({ name: 'authjs.session-token', value: sessionToken, expires: expiryDate, maxAge })
//         console.log(res.next().cookies)
//         return sessionToken
//       }
//      }
//      else return encode({token, salt, secret})
//   },

//   decode: async function({token, secret , salt }){
//     if(token?.credentials){
//       return null
//     }
//     return decode({token, secret, salt})
//   }
// },
callbacks: {
    async signIn({user, profile , account, credentials}){
      // console.log(user, profile, account, credentials)
      // const sessionToken = getCookie(req, 'authjs.session-token')

      
    //   if(sessionToken){
    //     const hasSession = await prisma.session.findUnique({
    //     where : {
    //       sessionToken : sessionToken
    //     }
        
    //   })
    //   await PrismaAdapter(prisma).updateSession({sessionToken : hasSession.sessionToken})
    // }
    //   if(hasSession !== null){
        
    //   }
      // const sessionToken = crypto.randomUUID()
      // const expiryDate = fromDate(maxAge)
      // const createSession =  await PrismaAdapter(prisma).createSession({sessionToken, userId: token?.sub , expires: expiryDate})
      // if(createSession){
      //   return true
      // }
      return true
    },
    
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
  
    //   // Allows callback URLs on the same origin
    //   if (new URL(url).origin === baseUrl) return url
  
    //   return baseUrl
    // },

    async jwt({ token, user, trigger, account, profile }) {
        return token
    },

    async session({ session, user, token }) {
      console.log(session, user, token, 'pimp')
      return session
    },
  }
  }
})

