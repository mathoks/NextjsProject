
import  {NextAuthConfig} from 'next-auth'
import NextAuth from 'next-auth/next'
import Google from 'next-auth/providers/google'
import prisma from './models/model'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const {handlers, sigIn, signOut, auth} = NextAuth(
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