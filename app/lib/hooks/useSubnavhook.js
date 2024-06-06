import Page1 from "@/app/ui/Page1";
import { InView } from "react-intersection-observer";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useGethook = (func) => {
  const [val, setval] = useState(null);
  useEffect(() => {
   
    setval(
      
        document.getElementById(func)
    );
    
  }, [func]);
  
  return val;
};

export const useSubnavhook = (visi) => {
  const [index, setIndex] = useState("#about");
  const Tabs = [
    { id: 0, tag: "about", child: <Page1 visi={visi} index={index} /> },
    { id: 1, tag: "Products", child: <Page2 /> },
    { id: 2, tag: "Recommended", child: <Page3 /> },
  ];

  

  const Wrapper = () => 
     Tabs.map((Tab, id) => (
          <InView
            root= {null}   //{rootRef}
            rootMargin= {id === 0 ? "10px" : "100px"}
            key={id}
            threshold= {id === 0 ? 0.01 : 0.75}
          >
            {({ inView, ref, entry }) => {
              if (inView && entry?.isIntersecting) {
                setIndex(`#${Tab.tag}`);
              }
              return (
                <div
                  ref={ref}
                  data-curr={Tab.tag}
                  id={Tab.tag}
                  className="min-h-screen p-2 pt-10 "
                >
                  {Tab.child}
                  {id === 0 ? <p className="mt-40">{inView}</p> : ""}
                  <h2 className="text-black ">{`Header inside viewport ${inView}.`}</h2>
                </div>
              );
            }}
          </InView>
        ))

  return <Wrapper />;
};
