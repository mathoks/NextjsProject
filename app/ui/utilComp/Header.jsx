
import { AccessTimeOutlined, DiamondOutlined, LocationOnOutlined } from '@mui/icons-material'
import {Avatar} from '@mui/material'
import React from 'react'
import Tab2 from '../Tab2'
import getYear from '@/app/lib/utills/getYear'
import { auth } from '@/auth'

const Header =async ({params, message, storeInfo, ...rest}) => {
    const {id,  market, state, createdAt, country, bizLogo} = storeInfo
    const session = await auth()
 const visi=false
  return (
    <nav
                aria-label="main"
                className={` fixed flex text-sm top-0 left-0  flex-col space-y-2  z-50 w-screen px-4 bg-[#6A0DAD]  pt-2  text-slate-100  pb-0  even:pb-0 ${
                  visi ? "shadow" : ""
                }`}
              >
               {/* <ToastContainer  className={'w-fit text-center text-red-600'}/>  */}
                <div
                  className={`flex justify-between flex-wrap items-center space-y-3 pt-4 ${
                    visi ? "hidden transition duration-500" : ""
                  }`}
                >
                 
                    <Avatar className=' ring-2 ring-white'  src={bizLogo || null}/>
                  
                  
                  <div className="flex space-x-1 items-center">
                  
                   
                  
                    <span>
                      <DiamondOutlined fontSize="inherit" />
                    </span>

                    <span>
                      <p >Diamond Member</p>
                    </span>
                  </div>
                  
                </div>
                <div>
                <div className="flex space-x-1 items-center pt-1">
                    <span>
                      <LocationOnOutlined fontSize="inherit" />
                    </span>

                    <span>
                      <p>{message ? '' 
                      : market + " " + state + " " + country }</p>
                    </span>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                <div className="flex space-x-1 items-center">
                    <span>
                      <AccessTimeOutlined fontSize="inherit"/>
                    </span>
                    <span>
                      <p>{`Member since ${getYear(createdAt)}`}</p>
                    </span>  
                  </div>
                <button className={` font-semibold ring-1 ring-[#6A0DAD] bg-white text-gray-800 rounded-full px-2.5 py-1.5 ${id === session?.user?.id ? 'visible' : "invisible"}`}>Edit store</button>
                </div>
                <Tab2 params={params}/>
                
                
              </nav>
  )
}

export default Header



// import Link from 'next/link'
// import React from 'react'

// const page = () => {
//   return (
//     <div className='h-screen bg-amber-700'>
//       <nav>
//         <Link href={'/products'}>
//         Products
//         </Link>
//         <Link href={'/Branches'}>
//         Branches
//         </Link>
//         <Link href={'/Recommende'}>
//         Recommended
//         </Link>
//       </nav>
//     </div>
//   )
// }

// export default page
