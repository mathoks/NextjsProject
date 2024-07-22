
import { InView } from "react-intersection-observer";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductPage1 from "@/app/ui/ProductPage1";



// export const useGethook = (func) => {
//   const [val, setval] = useState(null);
//   useEffect(() => {
//     setval(document.getElementById(func));
//   }, [func]);

//   return val;
// };

export const useSubhook2 = () => {
  const [index, setIndex] = useState("#Overview");
 
  const Tabs = [
     { id: 0, tag: "Overview", child: <ProductPage1/> },
    { id: 1, tag: "ProductDetails", child: <Page2 /> },
    { id: 2, tag: "Recommended", child: <Page3 /> },
  ];

  // useEffect(() => {
  //   window.addEventListener("beforeunload", () => {
  //     localStorage.setItem("tabs", window.location.hash);
  //   });
    
  //   setIndex(localStorage.getItem("tabs"));
  // }, []);

 
  const ProductWrapper = () =>
    Tabs.map((Tab, id) => (
      <InView
        root={null}
        rootMargin={id === 0 ? "0px" : "0px"}
        key={id}
        threshold={id === 0 ? 1 : 1}
        initialInView={id === 0 ? true : false}
      >
        {({ inView, ref, entry }) => {
          
          if (entry?.isIntersecting ) {
           if (!Object.is(index,`#${Tab.tag}`)){
             setIndex(`#${entry.target.id}`);
           window.location.hash = `#${entry.target.id}`;
           }
          }
          
          return (
          
           
            <div
              ref={ref}
              data-curr={Tab.tag}
              id={Tab.tag}
              className={` p-2  ${inView && id !== 0 ? 'pt-20 min-h-fit' : 'pt-12 min-h-[40rem]'}`}
            >
            <h2 className="text-black ">{`Header inside viewport ${inView}.`}</h2>
              {Tab.child}
              
            </div>
            
          );
        }}
      </InView>
    ));

  return { index, ProductWrapper}
};
