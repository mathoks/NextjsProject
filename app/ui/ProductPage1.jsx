
import { Divider } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ProductPage1 = ({visi, index}) => {
  return (
    <div className='flex flex-col space-y-20'>
    <nav
                aria-label="main"
                className={`fixed flex top-14 left-0 flex-col space-y-0 bg-white text-sm pt-2 w-full text-gray-600 pl-4 pr-4 pb-0  even:pb-0 ${
                  visi ? "shadow" : ""
                }`}
              >
            <Divider className={`right-0 left-0 fixed top-16${!visi ? "visible"  : "invisible opacity-0"}`}/>
                <div
                  className={`opacity-85 transition-opacity ease-in ${
                    !visi
                      ? "invisible transition duration-500 opacity-0 h-0 "
                      : "visible transition duration-500 opacity-100 "
                  }`}
                >
                  <ul
                    role="subTab"
                    className="flex justify-between items-center pl-4 pr-4 font-semibold"
                  >
                    <li
                      value={0}
                      className={` pb-3 ${
                        index === "#Overview"
                          ? "text-indigo-600 border-b-2 transition duration-500 border-violet-600"
                          : "border-none transition duration-500 text-gray-500 "
                      }`}
                    >
                      <Link href={`#Overview`}>Overview</Link>
                    </li>
                    <li
                      value={1}
                      className={` pb-3 ${
                        index === "#ProductDetails"
                          ? "text-indigo-600 border-b-2 transition duration-500  border-violet-600"
                          : "border-none transition duration-500 text-gray-500"
                      }`}
                    >
                      <Link href={`#ProductDetails`}>Product Details</Link>
                    </li>
                    <li
                      value={2}
                      className={`pb-3 ${
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
              <section className="text-gray-900">
                        <p>ffhjhffkf</p>
              </section>
              </div>
  )
}

export default ProductPage1