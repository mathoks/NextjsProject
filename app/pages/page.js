import React from 'react'
import { getUsers } from '../actions/users/getUsers'
const page = async () => {
  const userlist = await getUsers()
  console.log(userlist)
  return (
    <div className='flex items-center flex-row justify-center' ><p className='p-4'>page</p></div>
  )
}

export default page