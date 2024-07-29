"use client";
import { useCallback, useEffect } from "react";
import { useScrollTrigger } from "@mui/material";



export const useSubnavhook = (h , m , setIndex, setShow, data) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
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
    return () => {window.removeEventListener("scroll", handlescroll); setShow(['invisible', 'invisible']) ;}
  }, []);

  const handleShow = useCallback(() => {
  if(data){
    Object.entries(data)?.forEach((item, index) => {
      if(index > 8){
     if (item[1] !== null && item[0] === 'attribute'){
      // const  comment = document.getElementById('ProductReviews');
      //   console.log(comment);
      //   comment.style.minHeight = '4px';
       setShow((prev) => {
         prev[0] = "visible";
         return [...prev];
       });
      } 
      if (Array.isArray(item[1]) && item[1].length > 0 && item[0] === 'comment'){
        
        setShow((prev) => {
          prev[1] = "visible";
          return [...prev];
        });
      }}
      else{

      }
    })
  }
  },[data])

  useEffect(() => {
    const header = document.getElementById("prod_header");
      const tab = document.getElementById("prod_tab");
    if (trigger) {
        handleShow();
        header.style.visibility = "hidden";
        header.style.height = "0px";
        tab.style.top = "0px";
        tab.style.visibility = "visible";
      
      handlescroll();
    } else {
      setShow(['invisible', 'invisible']);
      header.style.visibility = "visible";
      header.style.height = "3rem";
      tab.style.height = "0px";
      tab.style.visibility = "hidden";
      
    }
  }, [handlescroll, trigger, handleShow]);

  return;
};
