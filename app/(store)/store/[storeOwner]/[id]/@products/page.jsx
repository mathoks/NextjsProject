import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { headers } from 'next/headers'
import { auth } from '@/auth'

const ProductCard = dynamic(()=>import('@/app/ui/productCard') , {ssr: false})
const page = async({params:{id, storeOwner}}) => {
  const header = headers()
  const domain = header.get("host");
  const session = await auth()
  const response =  await fetch(
    `http://${domain}/api/store/${storeOwner}/${id}/`,
    
    )
    const prodInfo =await response.json() 
    if(prodInfo?.data?.product?.length === 0){
      return (
      <div>
    <p className='pl-10 mx-auto'>no Products </p>
        <span className='flex justify-end'>
        <button className={`ring-1 ring-[#6A0DAD] rounded-full px-2.5 py-1.5 ${id === session.user?.id ? 'visible' : "invisible"}`}><Link href={`/Dashboard/${encodeURIComponent(session.user.name)}/settings/product`}>Add a product</Link></button>
        </span>
      </div>)
    }
  return (
    <div className=' space-y-4'>
    <h2 className=' font-semibold'>Products</h2>
    <div className='flex justify-center'>
    
    <ProductCard count={4}/>
    </div>
   
    <span className='flex justify-end text-gray-900 pr-4 bg-white p-4 pb-2'><button className='ring-1 px-2.5 py-1.5 rounded-full bg-[#6A0DAD] ring-inset ring-white text-white'><Link href={`${encodeURIComponent(id)}/products`}>See All</Link></button></span>
    </div>
  )
}

export default page
