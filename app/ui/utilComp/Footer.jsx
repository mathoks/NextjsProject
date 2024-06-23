'use client'
import { useSession } from 'next-auth/react'
import React from 'react'


const Footer = () => {
    const session = useSession()
    
  return (
    <footer>
        <div className="hidden bg-indigo-500 md:block">
        <div className=" flex gap-4 ml-auto  justify-start p-2 flex-wrap text-sm h-24">
          <p>My Account</p>
          <p>My Orders</p>
          <p>My List</p>
          <p>Open a shop on Mymart</p>
          <p>Customer Service</p>
        </div>
      </div>
      <div className="flex flex-col justify-start bg-[#4f08ed] space-y-2 pb-16">
        <div className="flex justify-between m-2">
          <span className="flex gap-1">
            <span className="text- text-green-500">&#x1F310;</span>
            <p>English</p>
          </span>
          <span className="flex gap-1">
            <span>&#x20A6;</span>
            <p>NGN-NG Naira</p>
          </span>
          <span className="flex gap-1">
            <span>&#x1F1F3;&#x1F1EC;</span>

            <p>Nigeria</p>
          </span>
        </div>
        <div className="flex justify-center items-center">
         {typeof session?.data?.user.name === 'null' || 'undefined' ? <p>Already a customer? Sign in</p> : <p>Welcome {session.user.name}</p>}
        </div>
        <div className="flex justify-center items-center gap-4">
          <p>Conditions of Use </p>
          <p>Privacy Notice</p>
        </div>
        <div className="flex justify-center items-center gap-4 text-sm">

          <p>@ 2022-2024, Mymart.com, Inc</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer