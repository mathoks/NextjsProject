
import { AccessTimeOutlined, DiamondOutlined, LocationOnOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const Header = ({params}) => {
   
  const visi=false,
  
  index = 'hhhh'
  return (
    <nav
                aria-label="main"
                className={`fixed flex text-sm top-0 left-0 flex-col space-y-3 bg-white  pt-2 w-full text-gray-600 pl-4 pr-4 pb-0  even:pb-0 ${
                  visi ? "shadow" : ""
                }`}
              >
                <div
                  className={`flex justify-between flex-wrap items-center space-y-3 pb-1 ${
                    visi ? "hidden transition duration-500" : ""
                  }`}
                >
                  <div className="flex space-x-1 items-center pt-4">
                    <span>
                      <LocationOnOutlined fontSize="inherit" />
                    </span>

                    <span>
                      <p>Alaba Lagos</p>
                    </span>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <DiamondOutlined fontSize="inherit" />
                    </span>

                    <span>
                      <p>Diamond Member</p>
                    </span>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <AccessTimeOutlined fontSize="inherit"/>
                    </span>
                    <span>
                      <p>Member since 2024</p>
                    </span>
                  </div>
                </div>
                <hr className=' h-[0.1rem]'/>
                <div
                  className={ `${
                    visi
                      ? "invisible transition duration-500 opacity-100 h-0 "
                      : "visible transition duration-500 opacity-100 "
                  }`}
                >
                  <ul
                    role="subTab"
                    className="flex justify-between items-center pl-4 pr-4 text-sm text-gray-800"
                  >
                    <li
                      value={0}
                      className={` pb-3 ${
                        index === "products"
                          ? "text-indigo-600 border-b-2 transition duration-500 border-violet-600"
                          : "border-none transition duration-500 text-gray-500 "
                      }`}
                    >
                      <Link href={'#'}>About</Link>
                    </li>
                    <li
                      value={1}
                      className={` pb-3 ${
                        index === "#Products"
                          ? "text-indigo-600 border-b-2 transition duration-500  border-violet-600"
                          : "border-none transition duration-500 text-gray-500"
                      }`}
                    >
                      <Link href={`${encodeURIComponent(params)}/branch`}>Products</Link>
                    </li>
                    <li
                      value={2}
                      className={`pb-3 ${
                        index === "#Recommended"
                          ? "text-indigo-600 border-b-2  border-violet-600"
                          : "border-none text-gray-500"
                      }`}
                    >
                      <Link href={`${encodeURIComponent(params)}/recommended`} scroll>Recommended</Link>
                    </li>
                  </ul>
                  <hr className=""/> 
                </div>
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
