import React from 'react'
import { getProductByIds } from '../layout'
import ProdEditForm from '@/app/ui/uiForms/prodEditForm'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import ProductAttri from '@/app/ui/uiForms/ProductAttri'
const page = async({params}) => {
    
    const product = await getProductByIds(params)
    if(!product.data) return (<p>cant fetch data</p>);
    
 
    return (
    <div className='mt-12 flex flex-col  p-4  text-base w-full space-y-2 md:flex'>
    <div>
    {/* <h1 className='md:text-center font-semibold text-xl px-4 text-center'>Product Details</h1> */}
    <ProdEditForm data = {product.data}/>
    </div>
    
    <div>
    <div className='mx-auto md:max-w-80'>
    <Accordion sx={{border: "none", boxShadow: 'none', }} >
        <AccordionSummary
        expandIcon = {<ExpandMore/>}
        aria-controls='panel-content'
        id='panel-content'
        className='font-semibold text-center mx-auto text-lg'
        >
        Product Attributes
        </AccordionSummary>
        <AccordionDetails>
            <ProductAttri data={product.data}/>
        </AccordionDetails>
    </Accordion>
    </div>
    </div>
      </div>
  )
}

export default page
