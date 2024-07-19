import ProductAttri from '@/app/ui/uiForms/ProductAttri'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col space-y-4 mt-14 px-4'>
    <span className='flex flex-col mx-auto'>
    <h2 className='text-center font-bold text-lg  w-56'>Tell Your customers more about your product</h2>
    </span>
   
     <ProductAttri/>
    </div>
  )
}

export default page
