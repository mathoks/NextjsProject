import BranchForm from '@/app/ui/uiForms/branchForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col space-y-4 pt-14 px-4'>
    <span className='flex flex-col mx-auto'>
    <h2 className='text-center font-semibold text-lg  w-56'>Get closer to your</h2>
    <h2 className='text-center font-semibold text-lg  w-56'>customers with a branch</h2>
    </span>
   
     <BranchForm/>
    </div>
  )
}

export default page
