"use client"
import React from 'react'
import { MakeEllipsis } from '../lib/utills/Makelipsis'
import { BookmarkAddOutlined } from '@mui/icons-material'
import RatingsWin from './utilComp/RatingsWin'
import { useRouter } from 'next/navigation'

const Ava = (ava) => {
    switch (ava) {
      case "LIMITED_STOCK":
        return { className: "text-red-400" };
  
        break;
      case "IN_STOCK":
        return { className: "text-green-400" };
  
        break;
      default:
        return { className: "text-yellow-400" };
  
        break;
    }
  };
const SimilarProd = ({prods}) => {
const router = useRouter()
 if(prods.length === 0)return <p>No similar Products</p>
 const Tiles = prods.map(({id, storeId, name, description, price, availability,  rating, prodImage}, ids)=>{
   return <div className='w-[14rem] flex-shrink-0  ring-1 h-full shadow-lg p-1  rounded-md bg-white ' key={ids}>
                  
                  <div className="flex justify-end">
                
                      <BookmarkAddOutlined fontSize="small" />
                    
                    
                  </div>
                  <hr className=" w-full mt-1"/>
                
                <div
                  className="space-y-3 pb-3"
                  onClick={() =>
                    router.push(
                      `/store/${encodeURIComponent(
                        storeId
                      )}/product/${encodeURIComponent(id)}`
                    )
                  }
                >
                 
                  <div className="flex mx-auto ">
                    <img
                      src= {prodImage?.length > 0 ? prodImage[1].image : "" }
                      // sizes="50vw"
                      alt="DealerPic"
                      width={200}
                      height={120}
                      loading="lazy"
                      className="rounded-b-lg mx-auto"
                    />
                  </div>
                  <div className=" flex flex-col space-y-1 px-2">
                    <span className="flex justify-between ">
                      <span className=" w-[100%] overflow-ellipsis font-semibold text-sm line-clamp-2 ">
                        {name}
                      </span>

          
                    </span>
                    <span className="text-[12px] first-letter:capitalize" {...Ava(availability)}>{availability.toLowerCase().replace(/_/g, ' ')}</span>
                      <MakeEllipsis text={description} size={60} flag={"A"} />
                      <span className="flex justify-between items-center">
                        <span className="flex justify-start items-center space-x-1 py-2 font-semibold">
                          <span className="text-[12px]">&#x20A6;</span>
                          <p className="text-[14px]">{price}</p>
                        </span>
                      </span>
                   <RatingsWin rating={rating}/>
                   
                  </div>
                  
                </div>
                
    </div>
  })

  return (
    <div className='space-y-4 '>
    <div className='overflow-x-auto flex space-x-4 py-2 px-2'>
    {Tiles}
    </div>
    <span className='flex justify-end'>
        <button className='text-blue-500 font-medium text-end'>See all</button>
    </span>
    </div>
  )
}

export default SimilarProd