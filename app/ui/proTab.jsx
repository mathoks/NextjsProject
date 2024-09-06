"use client";


import { useState } from 'react';
import { useSubnavhook } from '../lib/hooks/useSubnavhook';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const ProTab = ({data}) => {
    const [show, setShow] = useState(['invisible', 'invisible']);
    const [index, setIndexx] = useState(0);      
    useSubnavhook( 0.1, 0.25, setIndexx, setShow , data)
      const router = useRouter()
 
      useState(()=>{
        
        return ()=> setShow(['invisible', 'invisible'])
      },[data.attributes, data.comment])

      const handleclick = (e) => {
        console.log(e?.target.dataset.id)
        if(e?.target.value === 0){
           return window.scrollTo({top:15, behavior: 'smooth'})
        }
        else{
        router.replace(`#${e.target.dataset.id}`)
        document.getElementById(e.target.dataset.id).scrollIntoView({behavior: 'smooth'})
        } 
       
}
   
    
  return (
        <nav
                aria-label="main"
                id='prod_tab'
                className={`fixed shadow z-50 flex invisible left-0 flex-col space-y-0 bg-white text-sm pt-3 w-full text-gray-600 px-0 pb-9`}

              >
            
                <div
                //   className={`
                    //  ${!trigger ? 'invisible'  : "visible transition-opacity opacity-100 "}`}
                >
                  <ul
                    role="subTab"
                    className="flex justify-between items-center px-1 font-semibold pb-4"
                  >
                    <li
                        onClick={handleclick}
                      value={0}
                     className={`pb-4 tab    ${index === 0 ? 'border-b-2  border-indigo-600 text-indigo-600' : 'border-none font-medium text-gray-500'}`}
                     data-id='Overview'
                    >
                      Overview
                    </li>
                    <li
                      value={1}
                       data-id='ProductDetails'
                        onClick={handleclick}
                        className={`tab ${show[0]} pb-4 ${index === 1 ? 'border-b-2  border-indigo-600 text-indigo-600' : 'border-none font-normal text-gray-500'}`}
                    >
                      Product Details
                    </li>
                    <li
                      value={2}
                    data-id='ProductReviews'
                      className={`tab ${show[1]} pb-3 ${index === 2 ? 'border-b-2  border-indigo-600  text-indigo-600' : 'border-none font-medium text-gray-500'}`}
            
                      
                    >
                      <Link href={`#ProductReviews`}>Reviews</Link>
                    </li>
                    <li
                      value={3}
                      data-id='ProductRecommended'
                       
                      className={`tab pb-4 ${index === 3 ? 'border-b-2  border-indigo-600  text-indigo-600' : 'border-none font-medium text-gray-500'}`}
            
                      
                    >
                      <Link href={`#ProductRecommended`}   scroll>Recommended</Link>
                    </li>
                  </ul>
                </div>
              </nav>
  )
}
