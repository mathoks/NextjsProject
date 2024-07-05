import { DescriptionOutlined, LocationOnOutlined, PhoneAndroid, StoreOutlined, StreetviewOutlined } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'
import {Divider} from '@mui/material'

const page = () => {
  
  
  return (
    
    <div className='flex flex-col space-y-4 p-4 mx-auto w-96 ' >
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
    <div className='flex space-x-4 w-[96%]'>
    <DescriptionOutlined fontSize='inherit' sx={{color: 'gray'}}/>
    <span>we deal in all kinds of Tv sets Electronics and other assecories please let us know if you are interested</span>
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
