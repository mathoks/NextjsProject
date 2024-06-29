import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
//import prisma from "@/models/model";
import Credentials from "next-auth/providers/credentials";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import {encode} from 'next-auth/jwt'
import { fromDate } from "./app/lib/utills/expiration";
import Cookies from "cookies";





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
            };
        
      } catch (error) {
        console.log(error)
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

export const { handlers, auth, signIn, signOut } = NextAuth({
  basePath: "/api/auth",
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "database",
    maxAge: 60 * 60 * 24 * 4,
  },
  callbacks: {
    async signIn(){

    },
    
    async jwt({ session, token, user, trigger, account, profile }) {
      if(account?.provider === 'credentials'){
        token.credentials = true
      }
      return token
    },

    jwt: {
      encode: async function(params){
          console.log(params)
        if(params?.token?.credentials){
          const maxAge = 60 * 60 * 7
          const sessionToken = crypto.randomUUID()
          const expiryDate = fromDate(maxAge)
          await PrismaAdapter(prisma).createSession({sessionToken, userId: params.user.userId, expires: expiryDate})
          
        }
        else return encode(params)
      }
    },
    async session({ session, user,}) {
      console.log(user)
      return session;
    },
  },
});
