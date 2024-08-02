import React from 'react'
import { PostCreate } from '../ui/Buttons/postCreate'
import { auth } from '@/auth'


const page =async () => {
    const session = await auth()

  return (
    <div>
      <section>

      </section>
      <section>
        <p>Post here</p>
      </section>
      <PostCreate avatar = {session?.user?.image || null}/>
    </div>
  )
}

export default page
