import React from 'react'
import { getProductByIds } from '../layout'
import ProdEditForm from '@/app/ui/uiForms/prodEditForm'
const page = async({params}) => {
    
    const product = await getProductByIds(params)
    if(!product.data) return (<p>cant fetch data</p>);
    
 
    return (
    <div className='mt-16 flex flex-col  p-4  text-base w-full space-y-2'>
    <div>
    <h1 className='md:text-center font-semibold text-xl px-4'>Product Details</h1>
    <ProdEditForm data = {product.data}/>
    </div>
    
    <div>
    <h1 className='md:text-center font-semibold text-xl px-4'>Product Attributes</h1>
    </div>
      </div>
  )
}

export default page
