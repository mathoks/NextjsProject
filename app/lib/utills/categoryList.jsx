
const cats = [
  "All category",
  "Electronics",
  "Furniture",
  "Safty",
  "Auto Parts",
  "Baby Items",
  "Mobile Phone",
  "Phone Accesories",
  "General Articles",
  "Machine Parts",
  "Hairs & Wigs",
  "Toys & Games",
  "Home Interior & Decor",
  "Bags & Luggages",
  "Building Materials",
  "Jewelries and Watches",
  "Musical Instruments",
  "Tools and Hardware",
  "Home Appliances",
  "Chemicals",
  "Food & Beverage",
  "Metals & Alloys",
  "Gifts & Craft",
  "School & Office Supplies",
  "Ligths & Lighting",
  "Apperal & Accessories",
  "Cosmetics & Beauty",
  "Power Transmission",
  "Rubber & Plastics",
];


import React, { memo, Suspense, useEffect, useState } from 'react'
import {CircularProgress} from '@mui/material'
import { getCategory } from '../actions/getCategory';
import { is } from 'immutable';


export const CategoryList = memo( function MappedProd({cat}){
    if(cat.length > 0){
    const List = cat.map(({name, id}, idx)=> 
  <li className='ring-1 rounded-full px-2.5 py-1 text-nowrap shadow text-slate-900  text-sm bg-slate-200' key={idx}>
       <input value={id} name='category' type='checkbox' className=''/> {name}
    </li>)
  return (
    
      <ul className='flex space-x-2 p-2 overflow-x-scroll'>
        {List}
      </ul>
   
  )
}
else return <p>cant load data</p>
}, (prevProps, nextProps)=> is(prevProps.cat, nextProps.cat) )

export const ProductList = memo(function MappedProd({data}){
if(data.length > 0){
 const List = data.map(({id, name}, ids)=> 
    (<li className='ring-1 rounded-full px-2.5 py-1 text-nowrap  text-slate-900  text-sm items-center underline underline-offset-4 bg-slate-200 shadow' key={ids}>
       <input name='productId' value={id} type='checkbox' className=''/> {name}
    </li>))

return (
  <Suspense fallback= {<CircularProgress size={20}/>}>
  
    <ul className='flex space-x-2 p-2 overflow-x-scroll'>
      {List}
    </ul>
  
  </Suspense>
)
}
else return <p></p>
}, (prevProps, nextProps)=> is(prevProps.data, nextProps.data) )
