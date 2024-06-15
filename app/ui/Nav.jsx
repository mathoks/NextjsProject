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
import { setDrawer } from "../lib/features/Drawer/drawerSlice";
import useHomeDrawer from "../lib/hooks/useHomeDrawer";




 const Nav = (props) => {
  const { DrawerHandler, DrawerWrapper } = useHomeDrawer();
  const [col, setcol] = useState(false)
  const navState = useAppSelector((state)=>state.nav.navToggle)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,

  });


  const {nav} = props
  const path = usePathname()

 

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
    <nav aria-label="main" className={`flex bg-[#6A0DAD]  flex-col fixed w-full z-50  ${col ? "shadow-lg" : ""}`} >
    <div className={`sm: flex flex-col space-y-4 opacity-100  bg-[#6A0DAD] md:flex items-center justify-center p-4 ${!navState ? "invisible h-0 opacity-0 transition-opacity" : ""}` }>
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
      <div className="flex pl-4 pr-4 justify-center ">
        <div className="border flex items-center justify-between bg-white p-2 rounded-md ">
        <SearchOutlined className=" text-[#6A0DAD]" fontSize="medium" sx={{ zIndex: 80}}/>
        <input placeholder="find here" className="placeholder:text-center text-zinc-950  pl-4 pr-4 focus:outline-none w-[98%]"/>
        <LocationOn onClick={DrawerHandler} className="text-[#6A0DAD] sm:pr-2" fontSize="medium" />
      </div>
      </div>
      </section>
      {/* <section className="md:hidden  text-center mt--10" >
      
        <input className="rounded"/>
      
      </section> */}
      </div>
      <Tab/>
      <DrawerWrapper/>
    </nav>
    ) : (
      null
      
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