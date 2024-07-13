import { DescriptionOutlined, LocationOnOutlined, PhoneAndroid, StoreOutlined, StreetviewOutlined } from '@mui/icons-material'
import React from 'react'
import { headers } from 'next/headers'

const page = async({params:{id , storeOwner}}) => {
  
  const header = headers()
  const domain = header.get("host");
  const response =  await fetch(
    `http://${domain}/api/store/${storeOwner}/${id}/`,
    
    )
    const users = await response.json()
    console.log(users)
    if(users?.message){
     console.log(users.message)
    }
  return (
    
    <div className='flex flex-col space-y-4 p-4  ' >
    <div className='flex space-x-4'>
    <StoreOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span>Chiby Stores</span>
    </div>
    <div className='flex space-x-4'>
    <LocationOnOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span>Idumota lagos Nigeria</span>
    </div>
    <div className='flex space-x-4'>
    <StreetviewOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span>Line 245/A Electronics Line</span>
    </div>
    <div className='flex space-x-4 w-[95%] text-wrap'>
    <DescriptionOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span className='text-wrap md:text-wrap'>we deal in all kinds of Tv sets Electronics and other assecories please let us know if you are interested</span>
    </div>
    <div className='flex space-x-4'>
    <PhoneAndroid fontSize='inherit' sx={{color: 'gray'}}/>
    <span>
    
    <span className={ '' }>08067870424</span>
    
    </span>

    </div>
    
    </div>
  )
}

export default page
