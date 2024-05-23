"use client"
import { AllOutOutlined, BuildOutlined, ChairAltOutlined, PhoneAndroid, RoofingOutlined, ShoppingBagOutlined, TvOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

const Tab = () => {
    const [index, setIndex] = useState(0)
    const handleChange = (e)=>{
        setIndex(()=>e.target.value)
        console.log(index)
    }

   

const Tabs = [{"id": 0, "val": "all Stores",  "href": "#", 'icon': <AllOutOutlined/> }, {"id": 1, "val": "phone",  "href": "#", 'icon': <PhoneAndroid/> },{"id": 2, "val": "furniture",  "href": "#", 'icon': <ChairAltOutlined/> },{"id": 3, "val": "fashion",  "href": "#", 'icon': <ShoppingBagOutlined/> },{"id": 4, "val": "machinery",  "href": "#" , 'icon': <BuildOutlined/>},{"id": 5, "val": "building-Materials",  "href": "#", 'icon': <RoofingOutlined/>}, {"id": 6, "val": "electronics",  "href": "#", 'icon': <TvOutlined/> }]

  return (
    <section className='flex items-start justify-between  overflow-x-scroll gap-8 text-indigo-700  w-screen ' >
    <ul value = {index} defaultValue={0}  onClick={handleChange} className='pl-2 pr-2 flex items-start justify-between  overflow-x-scroll gap-8 bg-white text-gray-500  pt-2 w-screen'>
      { Tabs.map((tab, id)=>(
        
        <li key={tab.id} value={tab.id || id}  className={`first-letter:capitalize focus:font-medium pb-1 text-nowrap ${index === tab.id? 'border-b-4 border-slate-900 text-lg font-[600] icon_slate' : 'border-none' }`}>
        <ul defaultValue={0} className='flex items-center justify-start gap-1'>
            <li  value={tab.id || id}>{tab.icon}</li>
            <li  value={tab.id || id} className='first-letter:capitalize' >{tab.val}</li>
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
