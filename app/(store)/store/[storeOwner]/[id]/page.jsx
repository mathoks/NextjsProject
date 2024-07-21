import { DescriptionOutlined, LocationOnOutlined, PhoneAndroid, StoreOutlined, StreetviewOutlined } from '@mui/icons-material'
import React from 'react'
import { headers } from 'next/headers'


const page = async({params:{id , storeOwner}}) => {

  const header = headers()
  const domain = header.get("host");
  const response =  await fetch(
    `http://${domain}/api/store/${storeOwner}/${id}/`
    
    )
    const users = await response.json()
    if(users.hasOwnProperty('data')){
    const { businessName, market, state, country, about, phone, shopAddress} = users?.data;
  
  return (
    
    <div className='flex flex-col space-y-4 shadow_cus p-4' >
    <div className='flex space-x-4'>
    <StoreOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span className='font-semibold'>{businessName}</span>
    </div>
    <div className='flex space-x-4'>
    <LocationOnOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span>{market + " " + state + " " + country || 'Idumota lagos Nigeria' }</span>
    </div>
    <div className='flex space-x-4'>
    <StreetviewOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span>{shopAddress || 'Line 245/A Electronics Line'}</span>
    </div>
    <div className='flex space-x-4 w-[95%] text-wrap'>
    <DescriptionOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span className='text-wrap md:text-wrap'> { about || 'we deal in all kinds of Tv sets Electronics and other assecories please let us know if you are interested'}</span>
    </div>
    <div className='flex space-x-4'>
    <PhoneAndroid fontSize='inherit' sx={{color: 'gray'}}/>
    <span>
    
    <span className={ '' }>{ phone || '08067870424'}</span>
    
    </span>

    </div>
    
    </div>
  )
}
else return (
  <div><p>cant fetch data</p></div>
) 
}

export default page
