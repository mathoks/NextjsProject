import React from 'react'
import dynamic from 'next/dynamic'

const ProductCard = dynamic(()=>import('@/app/ui/productCard') , {ssr: false})
const page = ({params:{id}}) => {
  return (
    <div className=' space-y-4'>
    <h2 className=' font-semibold'>Products</h2>
    <div className='flex justify-center'>
    
    <ProductCard count={10}/>
    </div>
   
    {/* <span className='flex justify-end text-gray-900 pr-4 bg-white p-4 pb-2'><button className='ring-1 px-2.5 py-1.5 rounded-full bg-[#6A0DAD] ring-inset ring-white text-white'><Link href={`${encodeURIComponent(id)}/products`}>See All</Link></button></span> */}
    </div>
  )
}

export default page
