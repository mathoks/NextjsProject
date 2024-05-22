import Link from 'next/link'
import React from 'react'

const Button = ({children}) => {
  return (
    <Link href={'/pages'}>
    <div  className='w-full px-4 rounded bg-lime-500'>{children}</div>
    </Link>
  )
}

export default Button