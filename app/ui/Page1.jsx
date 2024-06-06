import { AccessTimeOutlined, DiamondOutlined, LocationOnOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Page1 = ({visi, index}) => {
  return (
    <nav
                aria-label="main"
                className={`fixed flex top-0 left-0 flex-col space-y-0 bg-white  pt-2 w-full text-gray-600 pl-4 pr-4 pb-0  even:pb-0 ${
                  visi ? "shadow" : ""
                }`}
              >
                <div
                  className={`flex justify-between flex-wrap items-center space-y-3 pb-4 ${
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
                <Divider
                  variant="fullWidth"
                  className={`${visi ? "hidden" : " -ml-4 -mr-4 right-0 pb-0"}`}
                />
                <div
                  className={`${
                    !visi
                      ? "invisible transition duration-500 opacity-100 h-0 "
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
                        index === "#about"
                          ? "text-indigo-600 border-b-2 transition duration-500 border-violet-600"
                          : "border-none transition duration-500 text-gray-500 "
                      }`}
                    >
                      <Link href={`#about`}>About</Link>
                    </li>
                    <li
                      value={1}
                      className={` pb-3 ${
                        index === "#Products"
                          ? "text-indigo-600 border-b-2 transition duration-500  border-violet-600"
                          : "border-none transition duration-500 text-gray-500"
                      }`}
                    >
                      <Link href={`#Products`}>Products</Link>
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
  )
}

export default Page1