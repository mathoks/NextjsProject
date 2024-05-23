"use client"
import React, { useEffect, useState } from 'react'

const Tab = () => {
    const [index, setIndex] = useState(0)
    const handleChange = (e)=>{
        setIndex(()=>e.target.value)
        console.log(index)
    }

   

const Tabs = [{"id": 0, "val": "electronics",  "href": "#" }, {"id": 1, "val": "phone",  "href": "#" },{"id": 2, "val": "furniture",  "href": "#" },{"id": 3, "val": "fashion",  "href": "#" },{"id": 4, "val": "machinery",  "href": "#" },{"id": 5, "val": "building/Materials",  "href": "#" }]

  return (
    <section className='flex items-start justify-between  overflow-x-scroll gap-8 bg-white text-indigo-700 font-bold  w-screen'>
    <ul value = {index} defaultValue={0}  onClick={handleChange} className='pl-2 pr-2 flex items-start justify-between  overflow-x-scroll gap-8 bg-white text-gray-900 font-bold pt-2 w-screen'>
      { Tabs.map((tab, id)=>(
        <li key={tab.id || id} value={tab.id || id} className={`first-letter:capitalize focus:font-medium pb-1   ${index === tab.id? 'border-b-4 border-blue-600 text-lg  text-indigo-700' : 'border-none' }`}  >
       
            {tab.val}
        
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
