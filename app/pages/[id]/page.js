import getUserById from '@/app/actions/users/getUserById'
import React from 'react'


const page = async({params}) => {
    
    const info = await getUserById(params?.id)
   
  return (
    <div className=''>
    <div className='pt-50'>
    <p>{info?.title}</p>
    </div>
      
    </div>
  )
}

export default page
