import React, { memo, useRef } from 'react'
import Stars from './Stars'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);
const RatingsWin = memo(function Ratingswins({rating, productId}){
    const handleFetch = async()=>{
    //    const data =  await getRatings(productId)
    }
    const ref = useRef()
    useGSAP(()=>{
        gsap.to(ref.current, {
            ease: 'none',
             scrollTrigger: {scrub: 0.3, onEnter: ()=> {handleFetch}, start: "20%"}
        })}, [ref])

  return (
    <div className="flex flex-col space-y-2 pt-2">
                        
                          <span className="flex space-x-1 items-center text-[10px]"  ref={ref}>
                            
                           
                            <Stars rating={rating} />
                           
                            <span className="text-[#005B9A]">(1123)</span>
                          </span>
                        
                      </div>
  )
}
)
export default RatingsWin
