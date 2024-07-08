
import { AccessTimeOutlined, DiamondOutlined, LocationOnOutlined } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'
import { headers } from 'next/headers'
import Tab2 from '../Tab2'

const Header = ({params, ...rest}) => {
    const header = headers()
   const path = header.get('referer')
  console.log( path.split('/'))
  const visi=false,
  
  index = 'hhhh'
  return (
    <nav
                aria-label="main"
                className={` fixed flex text-sm top-0 left-0 flex-col space-y-3 w-screen bg-white  pt-2  text-gray-600 pl-4 pr-4 pb-0  even:pb-0 ${
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
