"use client"
import { InView } from "react-intersection-observer";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ProductPage1 from "@/app/ui/ProductPage1";



export const useGethook = (func) => {
  const [val, setval] = useState(null);
  useEffect(() => {
    setval(document.getElementById(func));
  }, [func]);

  return val;
};

export const useSubhook2 = (data) => {
  const pathname = usePathname();
 
  const Tabs = [
     { id: 0, tag: "Overview", child: <ProductPage1 data ={data} /> },
    { id: 1, tag: "ProductDetails", child: <Page2 /> },
    { id: 2, tag: "Recommended", child: <Page3 /> },
  ];

  // useEffect(() => {
  //   window.addEventListener("beforeunload", () => {
  //     console.log('yes')//localStorage.setItem("tabs", window.location.hash);
  //   });
  //   if(pathname.includes('edit'))
  //    window.location.hash = ''
  // }, [pathname]);

 
  const ProductWrapper = () =>
    Tabs.map((Tab, id) => (
      <InView
        root={null}
        rootMargin={"-5px"}
        key={id}
        threshold={id== 0 ? 0.8:  0.8}
        className="bg-pink-300"
        // initialInView={id === 0 ? true : false}
      >
        {({ inView, ref, entry }) => { 
          if(entry){
            const idx = entry.target.dataset.curr
          if (entry?.isIntersecting && inView) { 
            console.log(entry?.isIntersecting, entry.target.id, inView)
            document.getElementById(idx).className =  "text-indigo-600 border-b-2 pb-5 transition duration-500  border-violet-600"
                      
          }
          else if(!entry?.isIntersecting) {
            document.getElementById(idx).className = "border-none transition duration-500 text-gray-500"
          }
          else{}
          } else{}
          return (
          
           
            <div
              ref={ref}
              data-curr={`${Tab.tag}-${Tab.id}`}             
              className={` p-2 min-h-fit  ${inView && id !== 0 ? 'pt-20' : 'pt-20 '}`}
              id = {Tab.tag} >
            <h2 className="text-black ">{`Header inside viewport ${inView}.`}</h2>
              {Tab.child}
              
            </div>
            
          );
        }}
      </InView>
    ));

  return ProductWrapper
};
