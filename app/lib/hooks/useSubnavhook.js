import Page1 from "@/app/ui/Page1";
import { InView } from "react-intersection-observer";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const useGethook = (func) => {
  const [val, setval] = useState("about");
  useEffect(() => {
    window.onpopstate = () => setval(true);

    return () => window?.removeEventListener("popstate", setval(false));
  }, [func]);
  return val;
};

export const useSubnavhook = (visi, pop) => {
  const [index, setIndex] = useState("");
  const [show, setshow] = useState(false);
  const goto = useRouter();
  const Tabs = [
    { id: 0, tag: "about", child: <Page1 /> },
    { id: 1, tag: "Products", child: <Page2 /> },
    { id: 2, tag: "Recommended", child: <Page3 /> },
  ];

  const check = useGethook(index);

  const Wrapper = () => {
    const mem = React.useMemo(
      () => (
        <InView initialInView={true} rootMargin="-10px">
          {({ inView, ref, entry }) => {
            if (!visi && inView) {
              setshow(false);
            } else if (visi && !inView) {
              setshow(true);
            } else {
            }

            return (
              <div
                ref={ref}
                 className={`sticky top-0 bg-white w-full`}
              >
                <ul
                  role="subTab"
                  className={`flex justify-between items-center pl-4 pr-4 font-semibold  hide_nav ${
                    !show
                    ? "invisible transition duration-500 opacity-100 h-0 "
                    : "visible transition duration-500 opacity-100 h-12"
                }`}
                >
                  <li
                    value={0}
                    className={`pt-2 ${
                      index === "#about"
                        ? "text-indigo-600 border-b-2 pb-3  border-violet-600"
                        : "border-none text-gray-500 "
                    }`}
                  >
                    <Link href={""}>About</Link>
                  </li>
                  <li
                    value={1}
                    className={` ${
                      index === "#Products"
                        ? "text-indigo-600 border-b-2 p-3  border-violet-600"
                        : "border-none text-gray-500"
                    }`}
                  >
                    <Link href={`/pages#Products`} >Products</Link>
                  </li>
                  <li
                    value={2}
                    className={`pt-2 ${
                      index === "#Recommended"
                        ? "text-indigo-600 border-b-2 pb-3 border-violet-600"
                        : "border-none text-gray-500"
                    }`}
                  >
                    <Link href={`/pages#Recommended`}>Recommended</Link>
                  </li>
                </ul>
              </div>
            );
          }}
        </InView>
      ),
      []
    );

    return (
      <div className="bg-slate-100">
        {mem}

        {Tabs.map((Tab, id) => (
          <InView
            root={null}
            rootMargin={id === 0 ? "50px" : "200px"}
            key={id}
            initialInView={false}
            threshold={id === 0 ? 1 : 0.75}
          >
            {({ inView, ref, entry }) => {
              if (inView && entry?.isIntersecting) {
                if (id !== 0 || entry?.target?.id !== "about") {
                  window.location.hash = `#${Tab.tag}`;
                }

                setIndex(`#${Tab.tag}`);
              }
              {/* https://nextjs-project-if9d-git-prodbranch-mathoks-projects.vercel.app */}
              if (!inView && id === 0 && !visi && !check) {
                goto.push("https://nextjs-project-if9d-git-prodbranch-mathoks-projects.vercel.app/pages", { scroll: true });
              }
              return (
                <div
                  ref={ref}
                  data-curr={id === 0 ? "" : Tab.tag}
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
  };

  return <Wrapper />;
};
