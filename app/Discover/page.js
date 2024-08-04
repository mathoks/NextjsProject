import React from 'react'
import { PostCreate } from '../ui/Buttons/postCreate'
import { auth } from '@/auth'
import Post from '../ui/Post'


const page =async (props) => {
    const session = await auth()
   return (
    <div>
      <section>

      </section>
      <section>
      <Post/>
      </section>
      <PostCreate avatar = {session?.user?.image || null} userId={session?.user?.id || null}/>
    </div>
  )
}

export default page
