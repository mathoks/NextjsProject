"use client";
import { useCallback, useEffect } from "react";
import { useScrollTrigger } from "@mui/material";



export const useSubnavhook = (h , m , setIndex) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,
  });

  const handlescroll = useCallback(() => {
    window.addEventListener("scroll", (e) => {
      const ref = window.innerHeight;

      const tabs = document.querySelectorAll(".view");
      tabs.forEach((tab, id) => {

        if(id !== 0){
         
        if (
          m * ref - tab.getBoundingClientRect().top >
            h * tab.getBoundingClientRect().height 
        ) {
          
          setIndex(id);
        } else {
        }
        return
      }
      else if(id === 0){
        if(tab.getBoundingClientRect().top < 0 && tab.getBoundingClientRect().bottom >  m * ref){
        setIndex(id);
        
      }
      else {
        
      }
      return
    }
  
    else {}
      });
    
    });
  }, []);

  useEffect(() => {
    const header = document.getElementById("prod_header");
      const tab = document.getElementById("prod_tab");
    if (trigger) {
        header.style.visibility = "hidden";
        header.style.height = "0px";
        tab.style.top = "0px";
        tab.style.visibility = "visible";
      
      handlescroll();
    } else {
      header.style.visibility = "visible";
      header.style.height = "3rem";
      tab.style.height = "0px";
      tab.style.visibility = "hidden";
    }
  }, [handlescroll, trigger]);

  return;
};
