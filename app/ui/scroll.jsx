"use client";
import React, { useEffect } from "react";
useEffect;
const Scroll = () => {
  useEffect(() => {
    const cont = document.getElementById("prod_about");
    const header = document.getElementById("prod_header");
    const tab = document.getElementById("prod_tab");
    window.addEventListener("scroll", function () {
      if (
        cont.getBoundingClientRect().top < header.getBoundingClientRect().bottom
      ) {
        header.style.visibility = "hidden";
        header.style.height = "0px";
        tab.style.top = "0px";
        tab.style.visibility = "visible";
      } else {
        header.style.visibility = "visible";
        header.style.height = "3rem";
        tab.style.height = "0px";
        tab.style.visibility = "hidden";
      }
    });

    return () => {
      window.removeEventListener("scroll", function () {
        if (
          cont.getBoundingClientRect().top <
          header.getBoundingClientRect().bottom
        ) {
          header.style.visibility = "hidden";
          header.style.height = "0px";
          tab.style.top = "0px";
          tab.style.visibility = "visible";
        } else {
          header.style.visibility = "visible";
          header.style.height = "3rem";
        //   tab.style.height = "0px";
          tab.style.visibility = "hidden";
        }
      });
    };
  }, []);
  return (
    <div className="sr-only h-0">
      <h1>scroll </h1>
    </div>
  );
};

export default Scroll;
