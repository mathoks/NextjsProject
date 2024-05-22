import NextAuth from 'next-auth/next'
import Google from 'next-auth/providers/google'
import prisma from './models/model'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const {handler, sigIn, signOut, auth} = NextAuth(
    {
        adapter: PrismaAdapter(prisma),
        providers:[Google],
        theme:{
            
        },
        trustHost: true,
        callbacks: {
            session({session, user}){
                session.user.role = user.role
                return session
            }
        }
    }
)

