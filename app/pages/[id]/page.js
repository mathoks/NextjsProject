import getUserById from '@/app/actions/users/getUserById'
import React from 'react'


const page = async({params}) => {
    console.log(`${params?.id} is ttttt`)
    const info = await getUserById(params?.id)
    console.log(info)
  return (
    <div className=''>
    <div className='pt-50'>
    <p>{info?.title}</p>
    </div>
      
    </div>
  )
}

export default page
