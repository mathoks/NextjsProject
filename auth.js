import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/models/model";
import Credentials from "next-auth/providers/credentials";

const providers = [
    Google,
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
  providers,
  trustHost: true,
  pages: {
    signIn: '/auth/login/',
  },
  callbacks: {
    async session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
    async signIn({ user, email, profile }) {},
  },
});
