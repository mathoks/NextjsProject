"use client"
import React, { useEffect, useState } from 'react'
import { useSubnavhook } from '../lib/hooks/useSubnavhook'

const Page = () => {
  const [Dom, setDom] = useState(null)
  
  useEffect(() => {
    const doc = document.getElementById("userPage")
    setDom(doc)
  }, [])
  
  const Wrapper = useSubnavhook(Dom)


  return (
    <div  className=''>
    <div id="userPage" className=' h-auto'>
    {Wrapper}
    </div>
    </div>
  )
}

export default Page