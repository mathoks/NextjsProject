"use client"
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import { useScrollTrigger } from "@mui/material";
export const ProTab = ({visi, index}) => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 1,
      });

  return (
        <nav
                aria-label="main"
                className={`fixed z-50 flex top-14 left-0 flex-col space-y-0 bg-white text-sm pt-2 w-full text-gray-600 pl-4 pr-4 pb-0  even:pb-0 ${
                  trigger ? "shadow" : ""
                }`}
              >
            <Divider className={`right-0 left-0 fixed top-16${!visi ? "visible"  : "invisible opacity-0"}`}/>
                <div
                  className={`opacity-0  ${
                    !trigger
                      ? "invisible  h-0 "
                      : "visible transition-opacity opacity-100 "
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
  )
}
