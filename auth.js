import NextAuth from "next-auth";
import bcrypt from "bcryptjs"; 
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
//import prisma from "@/models/model";
import Credentials from "next-auth/providers/credentials";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";




 const neon = new Pool({
    connectionString: process.env.POSTGRES_PRISMA_URL,
 })

 const adapter = new PrismaNeon(neon)
 const prisma = new PrismaClient({adapter})
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

        if(User){
          return {
            id: User.id,
            email: User.email
          }
        }
     
      //   if (User && User.password) {
      //     const match =  bcrypt.compare(c.password, User?.passwordHash);
      //    if(match) {
      //     return User
      //   } else {
      //     return ({ message: "user Not found / invalid Credentials" })
      //   }
      // }
         else {
        
         throw new Error("user Not found / invalid Credentials")
        }
      } catch (error) {
        throw new Error("Try again something happened");
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

export const { handlers, auth, signIn, signOut } = NextAuth({
  basePath: "/api/auth",
  adapter: PrismaAdapter(prisma),
  debug:  process.env.NODE_ENV !== "production" ? true : false,
  providers,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, user, token, }) {
      return session;
    },
    async jwt({session, token, user, account, profile}) {
      console.log(session)
      return {
      name: token.name || 'paul',
      email: token.email
      };
    }

  },
  
});
