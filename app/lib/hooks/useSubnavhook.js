import Page1 from "@/app/ui/Page1";
import { InView } from "react-intersection-observer";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AccessTimeOutlined,
  DiamondOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Divider } from "@mui/material";

// const useGethook = (func) => {
//   const [val, setval] = useState("about");
//   useEffect(() => {
//     window.onpopstate = () => setval(true);

//     return () => window?.removeEventListener("popstate", setval(false));
//   }, [func]);
//   return val;
// };

export const useSubnavhook = (visi, pop) => {
  const [index, setIndex] = useState("");
  const [show, setshow] = useState(false);
  const sp = true;
  const goto = useRouter();
  const Tabs = [
    { id: 0, tag: "about", child: <Page1 /> },
    { id: 1, tag: "Products", child: <Page2 /> },
    { id: 2, tag: "Recommended", child: <Page3 /> },
  ];

//   const check = useGethook(index);

  const Wrapper = () => {
    const mem = React.useMemo(
      () => (
        <InView initialInView={!visi} rootMargin="-10px">
          {({ inView, ref, entry }) => {
            if (inView && index === "about") {
              goto.push("http://localhost:3000/pages");
            }

            return (
              <nav
                aria-label="main"
                className={`fixed flex flex-col space-y-0 bg-white  pt-2 w-full text-gray-600 pl-4 pr-4 pb-0  even:pb-0 ${
                  visi ? "shadow" : ""
                }`}
                data-curr = 'about'
              >
                <div
                  className={`flex justify-between flex-wrap items-center space-y-3 pb-4 ${
                    visi ? "hidden transition duration-500" : ""
                  }`}
                >
                  <div className="flex space-x-1 items-center pt-4">
                    <span>
                      <LocationOnOutlined fontSize="inherit" />
                    </span>

                    <span>
                      <p>Alaba Lagos</p>
                    </span>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <DiamondOutlined fontSize="inherit" />
                    </span>

                    <span>
                      <p>Diamond Member</p>
                    </span>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <AccessTimeOutlined fontSize="inherit"/>
                    </span>
                    <span>
                      <p>Member since 2024</p>
                    </span>
                  </div>
                </div>
                <Divider
                  variant="fullWidth"
                  className={`${visi ? "hidden" : " -ml-4 -mr-4 right-0 pb-0"}`}
                />
                <div
                  className={`${
                    !visi
                      ? "invisible transition duration-500 opacity-100 h-0 "
                      : "visible transition duration-500 opacity-100 "
                  }`}
                >
                  <ul
                    role="subTab"
                    className="flex justify-between items-center pl-4 pr-4 font-semibold"
                  >
                    <li
                      value={0}
                      className={` pb-3 ${
                        index === "about"
                          ? "text-indigo-600 border-b-2 transition duration-500 border-violet-600"
                          : "border-none transition duration-500 text-gray-500 "
                      }`}
                    >
                      <Link href={`#about`}>About</Link>
                    </li>
                    <li
                      value={1}
                      className={` pb-3 ${
                        index === "Products"
                          ? "text-indigo-600 border-b-2 transition duration-500  border-violet-600"
                          : "border-none transition duration-500 text-gray-500"
                      }`}
                    >
                      <Link href={`/pages#Products`}>Products</Link>
                    </li>
                    <li
                      value={2}
                      className={`pb-3 ${
                        index === "Recommended"
                          ? "text-indigo-600 border-b-2  border-violet-600"
                          : "border-none text-gray-500"
                      }`}
                    >
                      <Link href={`/pages#Recommended`}>Recommended</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            );
          }}
        </InView>
      ),
      [index]
    );

    const sections = React.useMemo(
      () =>
        Tabs.map((Tab, id) => (
          <InView
            root={null}
            rootMargin={id === 0 ? "50px" : "200px"}
            key={id}
            initialInView={false}
            threshold={id === 0 ? 1 : 0.75}
          >
            {({ inView, ref, entry }) => {
              if (inView && entry?.isIntersecting && visi) {
                if(id === 0){
                    setshow(true)
                }
                {/* if (id !== 0 || (entry?.target?.id !== "about" && !visi)) { */}
                 {typeof window !== "undefined" ?  window.location.hash = `#${Tab.tag}`  : null};
                

                setIndex(`${Tab.tag}`);
              }
              {
                /* https://nextjs-project-if9d-git-prodbranch-mathoks-projects.vercel.app */
              }
              {
                /* if (!inView && id === 0 && !visi && !check) {
              goto.push("http://localhost:3000/pages", { scroll: true });
            } */
              }
              return (
                <div
                  ref={ref}
                  data-curr={id === 0 ? "" : Tab.tag}
                  id={Tab.tag}
                  className="min-h-screen p-2 pt-10 mt-96"
                >
                  {Tab.child}
                  <h2 className="text-black ">{`Header inside viewport ${inView}.`}</h2>
                </div>
              );
            }}
          </InView>
        )),
      [index]
    );

    return (
      <div className="bg-slate-100 flex flex-col space-y-20">
        {mem}

        {sections}
      </div>
    );
  };

  return <Wrapper />;
};
