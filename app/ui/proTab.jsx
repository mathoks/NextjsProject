"use client"
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import { useScrollTrigger } from "@mui/material";
export const ProTab = () => {

    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 1,
    //   });
    const index = "#Overview"
    const trigger = false
  return (
        <nav
                aria-label="main"
                id='prod_tab'
                className={`fixed shadow z-50 flex invisible left-0 flex-col space-y-0 bg-white text-sm pt-2 w-full text-gray-600 pl-4 pr-4 pb-10 `}
              >
            
                <div
                  className={`
                    
                       "visible transition-opacity opacity-100 "
                  `}
                >
                  <ul
                    role="subTab"
                    className="flex justify-between items-center pl-4 pr-4 font-semibold"
                  >
                    <li
                      value={0}
                      className={` pb-5 ${
                        index === "#Overview"
                          ? "text-indigo-600 border-b-2 transition duration-500 border-violet-600"
                          : "border-none transition duration-500 text-gray-500 "
                      }`}
                    >
                      <Link href={`#Overview`}>Overview</Link>
                    </li>
                    <li
                      value={1}
                      className={`pb-5 ${
                        index === "#ProductDetails"
                          ? "text-indigo-600 border-b-2 transition duration-500  border-violet-600"
                          : "border-none transition duration-500 text-gray-500"
                      }`}
                    >
                      <Link href={`#ProductDetails`}>Product Details</Link>
                    </li>
                    <li
                      value={2}
                      className={`pb-5 ${
                        index === "#Recommended"
                          ? "text-indigo-600 border-b-2  border-violet-600"
                          : "border-none text-gray-500"
                      }`}
                    >
                      <Link href={`#Recommended`} scroll>Recommended</Link>
                    </li>
                  </ul>
                </div>
              </nav>
  )
}
