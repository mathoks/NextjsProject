import { InfoOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/photo7.jpeg'
import Logo2 from '@/app/assets/photo6.jpeg'

const Ads = () => {
  return (
    <div className="flex  p-4 space-x-4 pb-1 overflow-x-scroll h-[17rem] w-full">
    <div className='w-[200px] relative flex flex-col rounded shadow-lg'>
    <Image
              src={Logo2}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0 "
            />
      <div className=" flex flex-col space-y-3 w-[200px] p-2">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-[98%] overflow-ellipsis text-sm leading-4">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between absolute bottom-2 w-[90%] items-center">
                <span className="flex justify-start items-center space-x-1">
                <span className="text-[12px]">&#x20A6;</span>
                  <p className="text-[12px] font-semibold"> 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
              </div>
              <div className='w-[200px] rounded relative   shadow-lg'>
              <Image
              src={Logo}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
      <div className="w-[200px]  flex flex-col space-y-3 p-2">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-[98%] overflow-ellipsis text-sm leading-4">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between absolute bottom-2 w-[90%] items-center">
                <span className="flex justify-start items-center space-x-1">
                <span className="text-[12px]">&#x20A6;</span>
                  <p className="text-[12px] font-semibold"> 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
              </div>
              <div className='w-[200px] rounded  relative  shadow-lg'>
              <Image
              src={Logo}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
      <div className=" w-[200px] pl-2 pr-2 flex flex-col space-y-3">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-[98%] overflow-ellipsis text-sm leading-4">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between absolute bottom-2 w-[90%] items-center">
                <span className="flex justify-start items-center space-x-1">
                <span className="text-[12px]">&#x20A6;</span>
                  <p className="text-[12px] font-semibold"> 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
              </div>
              <div className='w-[200px] rounded  relative shadow-lg'>
              <Image
              src={Logo2} 
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
      <div className="w-[200px] pl-2 pr-2 flex flex-col space-y-3">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-[98%] overflow-ellipsis text-sm leading-4">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between absolute bottom-2 w-[90%] items-center">
                <span className="flex justify-start items-center space-x-1">
                <span className="text-[12px]">&#x20A6;</span>
                  <p className="text-[12px] font-semibold"> 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
              </div>
    </div>
  )
}

export default Ads
