import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/models/model";
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
    Google({authorization: {
        params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code'
        }
    }}),
    Credentials({
      credentials: { password: { label: "Password", type: "password" } , email: {label: "email", type: "email"}},
      async authorize(c) {
        if (c.password !== "password") {
          return null;
        }
  
        return {
          id: "1",
          name: "Fill Murray",
          email: "fill@murray.com",
          image: "https://source.boringavatars.com/marble/120",
        };
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
  debug: true,
  providers,
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async session({ session, user }) {
      return session;
    },
  },
});
