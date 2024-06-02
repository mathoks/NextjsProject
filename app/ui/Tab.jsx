"use client"
import { AllOutOutlined, BuildOutlined, ChairAltOutlined, PhoneAndroid, RoofingOutlined, ShoppingBagOutlined, TvOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

const Tab = () => {
    const [index, setIndex] = useState(0)
    const handleChange = (e)=>{
        setIndex((prev)=> e.target.value === undefined ? prev : e.target.value)
        console.log(index)
    }

   

const Tabs = [{"id": 0, "val": "all Stores",  "href": "#", 'icon': <AllOutOutlined fontSize='small'/> }, {"id": 1, "val": "phone",  "href": "#", 'icon': <PhoneAndroid fontSize='small'/> },{"id": 2, "val": "furniture",  "href": "#", 'icon': <ChairAltOutlined fontSize='small'/> },{"id": 3, "val": "fashion",  "href": "#", 'icon': <ShoppingBagOutlined fontSize='small'/> },{"id": 4, "val": "machinery",  "href": "#" , 'icon': <BuildOutlined fontSize='small'/>},{"id": 5, "val": "building-Materials",  "href": "#", 'icon': <RoofingOutlined fontSize='small'/>}, {"id": 6, "val": "electronics",  "href": "#", 'icon': <TvOutlined fontSize='small'/> }]

  return (
    <section className='flex items-start justify-between  overflow-x-scroll gap-8   w-screen ' >
    <ul role='list'  onClick={handleChange} className='pl-2 pr-2 flex items-start justify-between  overflow-x-scroll gap-8 text-gray-300  pt-2 w-screen'>
      { Tabs.map((tab, id)=>(
        
        <li key={tab.id} value={tab.id || id}  className={`first-letter:capitalize cursor-pointer focus:font-medium pb-1 text-nowrap  ${index === tab.id? 'border-b-2 transition-transform duration-300 border-slate-100 text-base  text-slate-50' : 'border-none text-sm' }`}>
        <ul role='list' defaultValue={0} className='flex items-center justify-start gap-1'>
            <li  value={tab.id || id}>{tab.icon}</li>
            <li  value={tab.id || id} className='first-letter:capitalize ' >{tab.val}</li>
        </ul>
        </li>
        
      ))
      }
      </ul>
      {/* <div>
        <p className='first-letter:capitalize'>
            fashion
        </p>
      </div>
      <div>
        <p className='first-letter:capitalize'>
            machinary
        </p>
      </div>
      <div>
        <p className='first-letter:capitalize'>
            furniture
        </p>
      </div>
      <div>
        <p className='first-letter:capitalize'>
            electronic
        </p>
      </div> */}
    </section>
  )
}

export default Tab
