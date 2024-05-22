import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/models/model'


export const {handlers, auth, signIn, signOut} = NextAuth(
    {
        adapter: PrismaAdapter(prisma),
        providers:[Google],
        trustHost: true,
        basePath:'/api/auth',
        secret: process.env.AUTH_SECRET,
        callbacks: {
            session({session, user}){
                session.user.role = user.role
                return session
            },
            signIn: ({user, email, profile})=>{
                console.log(user)
            }
        }
    }
)

