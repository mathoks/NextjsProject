import React from 'react'
import SimilarProd from './SimilarProd'

export const Page4 = ({products}) => {
  return (
    <div className='min-h-[15rem] p-4 space-y-8'>
        <SimilarProd prods = {products}/>
  
    </div>
  )
}
