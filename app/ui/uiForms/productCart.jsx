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
     return  <option key={id} >{choice}</option>
    })
  return (
    <div className=' '>
        <select 
        name="category"
        enterKeyHint="done"
        required
        className=" p-4 shadow flex  text-gray-900 border-l-4 border-[#6A0DAD]">
        <option disabled>choose a category</option>
        {options}</select>
    </div>
  )
}

const price =  ['Negotiable', 'Best price']

export const PricePolicy = () => {
  const options = price.map((choice, id)=>{
   return  <option key={id} >{choice}</option>
  })
return (
  <div className='flex'>
      <select 
      name="priceOption"
      enterKeyHint="done"
      required
      className=" p-4 shadow flex  text-gray-900 border-l-4 border-[#6A0DAD] w-full">
      <option disabled>Price flexibility</option>
      {options}</select>
      
  </div>
)
}

export const LinkToBranch = ({option = []}) => {
  
  
  if(option.length > 0){
  const options = (option.map(({branchName}, id)=>{
    
   return  <option key={id} >{branchName}</option>
  })) 
return (
  <div className='flex'>
      <select 
      name="priceOption"
      enterKeyHint="done"
      required
      className=" p-4 shadow flex  text-gray-900 border-l-4 border-[#6A0DAD] w-full">
      <option disabled> choose a branch</option>
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

