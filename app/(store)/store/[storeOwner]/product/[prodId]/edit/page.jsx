import React from 'react'
import { getProductByIds } from '../layout'
import ProdEditForm from '@/app/ui/uiForms/prodEditForm'
const page = async({params}) => {
    
    const product = await getProductByIds(params)
    if(!product.data) return (<p>cant fetch data</p>);
    
 
    return (
    <div className='mt-16 flex flex-col  p-4  text-base w-full'>
    <ProdEditForm data = {product.data}/>
      </div>
  )
}

export default page
