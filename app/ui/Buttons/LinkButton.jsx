import { ArrowForwardIosOutlined} from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const LinkButton = ({path, unRead}) => {
    
  return (
    <Link href={path}>
    <span className='flex space-x-2 items-center'>
        <span className={`rounded-full h-1 w-1 bg-[#6A0DAD] ${unRead === 'unread' ? 'visible' :  'invisible'}` }/>
        <ArrowForwardIosOutlined className='text-gray-400' fontSize='small'/>
    </span>
    </Link>
  )
}

export default LinkButton