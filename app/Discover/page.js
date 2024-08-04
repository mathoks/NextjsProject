import React from 'react'
import { PostCreate } from '../ui/Buttons/postCreate'
import { auth } from '@/auth'
import Post from '../ui/Post'


const page =async () => {
    const session = await auth()
   return (
   <>
      <Post/>
      <PostCreate avatar = {session?.user?.image || null} userId={session?.user?.id || null}/>
    </>
  )
}

export default page
