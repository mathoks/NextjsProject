import { getBranch } from '@/app/lib/actions/getbranch'
import ProductForm from '@/app/ui/uiForms/ProductForm'
import { auth } from '@/auth'
import React from 'react'

const page = async() => {
    const session = await auth()
const data = await getBranch(session?.user.id)

  return (
    <div className='flex flex-col space-y-4 mt-14  px-4'>
        <span className='mx-auto'>
        <h4 className='font-bold text-base'>Sell To A Global Audience</h4>
        </span>
        <ProductForm data={data}/>
    </div>
  )
}

export default page