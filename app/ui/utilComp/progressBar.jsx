'use client'
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);


const ProgressBar = () => {
    const ref = useRef()
    useGSAP(()=>{
        gsap.to(ref.current, {
            value: 100,
            ease: 'none',
            scrollTrigger: {scrub: 0.3}
        })}, [ref])

  return (
    <progress suppressHydrationWarning ref={ref} max={100} min={0}></progress>
  )
}

export default ProgressBar
