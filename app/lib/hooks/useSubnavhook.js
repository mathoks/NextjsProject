import Page1 from "@/app/ui/Page1";
import { InView } from "react-intersection-observer";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const useGethook = (func) => {
  const [val, setval] = useState(null);
  useEffect(() => {
    setval(func);
  }, [func]);
  return val;
};

export const useSubnavhook = () => {
  const [index, setIndex] = useState("#about");
  const [scroll, setscroll] = useState(false);

  const Tabs = [
    { id: 0, tag: "about", child: <Page1 /> },
    { id: 1, tag: "Products", child: <Page2 /> },
    { id: 2, tag: "Recommended", child: <Page3 /> },
  ];

  const Wrapper = () => (
    <div className="bg-slate-100">
      <div className="pl-4 pr-4 sticky top-1 bg-white w-full">
        <ul
          role="subTab"
          className="flex justify-between h-12 items-center pl-4 pr-4 font-semibold"
        >
          <li
            value={0}
            // onClick={()=> setTimeout(()=>window.scrollTo(0,0), 20)}
            className={`${
              index === "#about"
                ? "text-indigo-600 border-b-2 pb-3  border-violet-600"
                : "border-none text-gray-500"
            }`}
          >
            <Link href={`/pages#about`}>About</Link>
          </li>
          <li
            value={1}
            className={` ${
              index === "#Products"
                ? "text-indigo-600 border-b-2 p-3  border-violet-600"
                : "border-none text-gray-500"
            }`}
          >
            <Link href={`/pages#Products`}>Products</Link>
          </li>
          <li
            value={2}
            className={`${
              index === "#Recommended"
                ? "text-indigo-600 border-b-2 pb-3 border-violet-600"
                : "border-none text-gray-500"
            }`}
          >
            <Link href={`/pages#Recommended`}>Recommended</Link>
          </li>
        </ul>
      </div>
      {Tabs.map((Tab, index) => (
        <InView
          root={null}
          rootMargin="200px"
          key={index}
          initialInView={index === "#about"}
          threshold={0.75}
        >
          {({ inView, ref, entry }) => {
            if (inView && entry?.isIntersecting) {
              window.location.hash = `#${Tab.tag}`;
              setIndex(`#${Tab.tag}`);
              if (entry.target.id === "about")
                if (
                  setTimeout(
                    () => window.scrollTo({ top: 0, behavior: "smooth" }),
                    20
                  )
                )
                  clearTimeout(
                    setTimeout(
                      () => window.scrollTo({ top: 0, behavior: "smooth" }),
                      20
                    )
                  );
            }
            return (
              <div
                ref={ref}
                data-curr={Tab.tag}
                id={Tab.tag || Tabs[0].tag}
                className="min-h-screen p-2 pt-10"
              >
                {Tab.child}
                <h2 className="text-black">{`Header inside viewport ${inView}.`}</h2>
              </div>
            );
          }}
        </InView>
      ))}
    </div>
  );

  return <Wrapper />;
};
