import React from 'react'

const productCategories = [
    // General Categories
    "Apparel & Accessories",
    "Electronics & Appliances",
    "Home & Garden",
    "Beauty & Personal Care",
    "Health & Wellness",
    "Food & Beverages",
    "Toys & Games",
    "Sports & Outdoors",
    "Books & Stationery",
    "Office Supplies & Electronics",
    "Arts & Crafts",
    "Pets & Pet Supplies",
    "Travel & Luggage",
  
    // Industry-Specific Categories
    "Baby & Kids",
    "Automotive",
    "Instruments & Music",
    "DIY & Hardware",
    "Jewelry & Watches",
    "Luxury Goods",
  ];
  
export const ProductCart = () => {
    const options = productCategories.map((choice, id)=>{
     return  <option value= {choice} key={id} >{choice}</option>
    })
  return (
    <div className=' no_border_select w-full'>
        <select 
        name="category"
        enterKeyHint="done"
        required
        className=" p-4 px-0 flex  text-gray-900 w-full">
        <option defaultValue={null} disabled>choose a category</option>
        {options}</select>
    </div>
  )
}


export const PricePolicy = () => {
  const price =  ['NEGOTIABLE', 'BESTPRICE']

  const options = price.map((choice, id)=>{
   return  <option key={id} value={choice} >{choice}</option>
  })
return (
  <div className='flex no_border_select'>
      <select 
      name="negotiable"
      enterKeyHint="done"
      required
      className=" p-4 px-0 flex  text-gray-900  w-full">
      <option defaultValue={null} disabled>Price flexibility</option>
      {options}</select>
      
  </div>
)
}

export const LinkToBranch = ({option = []}) => {
  
  
  if(option.length > 0){
  const options = (option.map(({branchName, id}, ids)=>{
    
   return  <option key={ids} value={id} >{branchName}</option>
  })) 
return (
  <div className='flex no_border_select'>
      <select 
      name="link"
      enterKeyHint="done"
      required
      className=" p-4 px-0 flex  text-gray-900  w-full">
      <option defaultValue={null} disabled> choose a branch</option>
      { options }</select>
      
  </div>
)
}
else if(option.length === 0) {
  return <p className='text-green-400'>You have no branch</p>
}
else {
  return <p className='text-red-400'>cant fetch branch</p>
}
}


export const Availability = () => {
  const Avail = [{name:"IN_STOCK", vis: "IN STOCK" }, {name: "OUT_OF_STOCK", vis: "OUT OF STOCK" }, {name:"COMING_SOON", vis: 'COMING SOON'}, {name:"LIMITED_STOCK", vis:"LIMITED STOCK"}];

  const options = Avail.map(({name , vis}, id)=>{
    return  <option value={name} key={id} >{vis}</option>
   })
 return (
   <div className='flex no_border_select'>
       <select 
       name="availability"
       enterKeyHint="done"
       required
       className=" p-4 px-0 flex  text-gray-900 w-full ">
       <option defaultValue={null} disabled> Availability</option>
       {options}</select>
       
   </div>
 )
}



export const ProductStatus = () => {
 const values = [{name: 'NEW', vis: 'NEW'}, {name: 'FAIRLY_USED', vis: 'FAIRLY USED'}, {name: 'REFURBISHED', vis: 'REFURBISHED' }]
  
 const options = values.map(({name , vis}, id)=>{
  return  <option value={name} key={id} >{vis}</option>
 })
return (
 <div className='flex no_border_select'>
     <select 
     name="status"
     enterKeyHint="done"
     required
     className=" p-4 px-0 flex  text-gray-900  w-full ">
     <option defaultValue={null} disabled> Status</option>
     {options}</select>
     
 </div>)
  
}

