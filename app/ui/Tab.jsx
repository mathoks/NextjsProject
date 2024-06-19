"use client"
import { BuildOutlined, ChairAltOutlined, PhoneAndroid, RoofingOutlined, SelectAllOutlined, ShoppingBagOutlined, TvOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const Tab = () => {
    const [index, setIndex] = useState(0)
    const handleChange = (e)=>{
        setIndex((prev)=> e.target.value === undefined ? prev : e.target.value)
        console.log(index)
    }

   

  

const Tabs = [{"id": 0, "val": "all Stores",  "href": "#", 'icon': <SelectAllOutlined fontSize='small'/> }, {"id": 1, "val": "phone",  "href": "#", 'icon': <PhoneAndroid fontSize='small'/> },{"id": 2, "val": "furniture",  "href": "#", 'icon': <ChairAltOutlined fontSize='small'/> },{"id": 3, "val": "fashion",  "href": "#", 'icon': <ShoppingBagOutlined fontSize='small'/> },{"id": 4, "val": "machinery",  "href": "#" , 'icon': <BuildOutlined fontSize='small'/>},{"id": 5, "val": "building-Materials",  "href": "#", 'icon': <RoofingOutlined fontSize='small'/>}, {"id": 6, "val": "electronics",  "href": "#", 'icon': <TvOutlined fontSize='small'/> }]

  return (
    <section className={`flex items-start justify-between  overflow-x-scroll gap-8   pb-0 z-50 w-[90%]`} >
    <ul role='list'  onClick={handleChange} className='pl-4 pr-4 flex items-start justify-between  overflow-x-scroll gap-8 text-slate-200  pt-2'>
      { Tabs.map((tab, id)=>(
        
        <li key={tab.id} value={tab.id || id}  className={`border-opacity-0 first-letter:capitalize cursor-pointer focus:font-medium pb-[8px] text-nowrap  ${index === tab.id? 'text_shadow2 border-opacity-100 transition-opacity  text-base  text-white' : 'transition-opacity duration-300 ease-linear border-opacity-0 text-sm' }`}>
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
