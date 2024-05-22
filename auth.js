import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/models/model'



export const {handlers, auth, signIn, signOut} = NextAuth(
    {
        basePath:"/api/auth",
        adapter: PrismaAdapter(prisma),
        providers:[Google],
        trustHost: true,
        
        callbacks: {
           async session({session, user}){
                session.user.role = user.role
                return session
            },
           async signIn({user, email, profile}){
                console.log(user)
            }
        }
    }
)

