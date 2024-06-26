"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/photo1.jpeg"
import { LocationOn, SearchOutlined, ExpandMore } from "@mui/icons-material";
import Tab from "./Tab";
import { useAppDispatch, useAppSelector } from "../lib/hooks/hooks";
import { setNav } from "../lib/features/Nav/navSlice";
import { connect } from "react-redux";
import { ButtonBase, useScrollTrigger } from "@mui/material";
import useHomeDrawer from "../lib/hooks/useHomeDrawer";




 const Nav = () => {
  
  const { DrawerHandler, DrawerWrapper } = useHomeDrawer();
  const [col, setcol] = useState(false)
  const navState = useAppSelector((state)=>state.nav.navToggle)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,

  });


  
// const navState = myNav.getState()
// console.log(navState?.nav?.nav)
// const isInit = useRef(false)
// const init = useRef(false)
// if(!init.current){
//   if(path === '/pages')
//   myNav.dispatch(setNav(false))
//   init.current = true
// }



useEffect(()=>{
  if(trigger)
    setcol(true)
  else {
    setcol(false)
    // dispatch(setNav(true))
  }
},[trigger])





  return (
    <nav aria-label="main" className={`flex bg-[#6A0DAD]  flex-col fixed w-full z-50  ${col ? "shadow-lg" : ""}`} >
    <div className={`sm: flex flex-col space-y-4 opacity-100  bg-[#6A0DAD] md:flex items-center justify-center  ${!navState ? "invisible h-0 opacity-0 transition-opacity" : "p-4"}` }>
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
      <div className="flex justify-center">
        <div className=" flex items-center justify-between bg-white p-2 shadow-my">
        <SearchOutlined className=" text-[#6A0DAD]" fontSize="medium" sx={{ zIndex: 80}}/>
        <input placeholder="find here" className="placeholder:text-center text-zinc-950  pl-4 pr-4 focus:outline-none w-[98%]"/>
        <LocationOn onClick={DrawerHandler} className="text-[#6A0DAD] sm:pr-2" fontSize="medium" />
      </div>
      </div>
      </section>
      </div>
      <div className={`flex items-center justify-between pr-4 ${navState ? 'bg-[#6A0DAD]' : 'bg-white'} `}>
      <Tab/>
      <span className="mx-auto ">
      <ButtonBase onClick={DrawerHandler}>
                <ExpandMore fontSize="medium" sx={{ color: navState ? "white" : "gray" }} />
              </ButtonBase>
      </span>
      </div>
      
      <DrawerWrapper/>
    </nav>
  );
};


const mapStateToProps = (state)=>({
  nav: state.nav.nav
})
const mapDispatchToProps = (dispatch)=>({
  setNav: ()=>{if(window.location.pathname === '/pages') dispatch(setNav('false'))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
