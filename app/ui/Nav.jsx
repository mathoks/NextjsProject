"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/photo1.jpeg"
import { DiamondOutlined, LocationOn, LocationOnOutlined, SearchOutlined, AccessTimeOutlined } from "@mui/icons-material";
import Tab from "./Tab";
import { useAppDispatch, useAppSelector, useAppStore } from "../lib/hooks/hooks";
import { usePathname } from "next/navigation";
import { setNav, setPath } from "../lib/features/Nav/navSlice";
import { connect } from "react-redux";
import { useScrollTrigger } from "@mui/material";




 const Nav = (props) => {
  const [col, setcol] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,

  });


  const {nav} = props
  const path = usePathname()
//   const dispatch = useAppDispatch()
 const myNav = useAppStore()
// const navState = myNav.getState()
// console.log(navState?.nav?.nav)
// const isInit = useRef(false)
const init = useRef(false)
if(!init.current){
  if(path === '/pages')
  myNav.dispatch(setNav(false))
  init.current = true
}

useEffect(() => {
  if(path === '/pages')
    myNav.dispatch(setNav(false))
  else 
    myNav.dispatch(setNav(true))
  
}, [path])

useEffect(()=>{
  if(trigger)
    setcol(true)
  else setcol(false)
},[trigger])





  return (
    nav && path === '/' ? (
    <nav aria-label="main" className={`flex bg-[#4f08ed] flex-col fixed w-full z-50  h-[158px] ${col ? "shadow-lg" : ""}`} >
    <div className="sm: flex flex-col space-y-4  bg-[#4f08ed] md:flex items-center justify-center p-4">
    <section>
      <Link href={"#"} className="flex  gap-4 items-center text_shadow">
      <p>Mymart</p>
      <Image
        src={Logo}
        alt="logo"
        width={20}
        height={20}
        className="rounded-full"
      />
      </Link>
      </section>
      <section>
      <div className="md:flex">
        <div className="border flex items-center justify-between bg-white p-2 space-x-1 rounded-md">
        <SearchOutlined className="icon_slate" fontSize="medium" sx={{ zIndex: 80}}/>
        <input placeholder="find here" className="placeholder:text-center text-zinc-950  pl-4 pr-4 focus:outline-none"/>
        <LocationOn className="icon_slate" fontSize="medium" />
      </div>
      </div>
      </section>
      {/* <section className="md:hidden  text-center mt--10" >
      
        <input className="rounded"/>
      
      </section> */}
      </div>
      <Tab/>
    </nav>
    ) : (
      null
      // <nav  aria-label="main" className=" flex flex-col space-y-0 bg-white  pt-2 w-full text-gray-600 p-4  shadow-md  shadow-blue-300" >
      // <div className="flex justify-between flex-wrap items-center space-y-3">
      // <div className="flex space-x-1 items-center pt-4">
      // <span>
      // <LocationOnOutlined/>
      // </span>
      
      // <span>
      //   <p>Alaba Lagos</p>
      // </span>
      // </div>
      // <div className="flex space-x-1 items-center">
      // <span>
      // <DiamondOutlined/>
      // </span>
      
      // <span>
      //   <p>Diamond Member</p>
      // </span>
      // </div>
      // <div className="flex space-x-1 items-center">
      // <span>
      // <AccessTimeOutlined/>
      // </span>
      // <span>
      //   <p>Member since 2024</p>
      // </span>
      // </div>

      // </div>
      // </nav>
    )
  );
};


const mapStateToProps = (state)=>({
  nav: state.nav.nav
})
const mapDispatchToProps = (dispatch)=>({
  setNav: ()=>{if(window.location.pathname === '/pages') dispatch(setNav('false'))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)