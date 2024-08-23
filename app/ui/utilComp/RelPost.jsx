"use client";
import Link from "next/link";
import React from "react";
import { InView } from "react-intersection-observer";

import useSWRInfinite from "swr/infinite";

const RelPost = ({ prodId, category }) => {
  const getKey = (pageIndex, previousPageData) => {
    console.log(pageIndex, previousPageData);
    if (previousPageData && !previousPageData.length) return null;
    if (pageIndex === 0)
      return `http://localhost:3000/api/getProductHints?limit=5&prodId=${
        prodId.prodId
      }&category=${encodeURIComponent(category)}`;
    else
      return `http://localhost:3000/api/getProductHints?cursor=${
        previousPageData.nextCursor
      }&limit=5&prodId=${prodId.prodId}&category=${encodeURIComponent(
        category
      )}`;
  };

  const fetcher = (url) =>
    fetch(url)
      .then((r) => r.json())
      .catch(() => {
        throw new Error("not found");
      });

  const { data, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);
   console.log(data);

  return (
    <div className={`overflow-y-scroll space-x-1 mt-8 mx-auto pb-4 bg-indigo-50 px-2 ${data?.length > 0 && data[0]?.list?.length > 0  ? 'h-44 visible' : 'h-0 invisible'}`}>
      <ul className="pt-2 min-h-36 space-y-4">
        {data?.map((page, id) => {
          return page?.list?.map((fi, idx) => (
            <li key={idx} className="">
              <p className=" first-letter: capitalize first-line:font-semibold">
                {fi.text}
              </p>
              <div className="flex space-x-2">
                <p>Author :</p>
                <Link
                  href={`/store/${encodeURIComponent(
                    fi.author.name
                  )}/${encodeURIComponent(fi.author.id)}`}
                  className="text-gray-400 hover:underline cursor-pointer active:text-indigo-600"
                >
                  {fi.author.name}
                </Link>
              </div>
            </li>
          ));
        })}
      </ul>
      <div className="flex justify-end ">
        <button
          className="px-2.5 ring-1 rounded-full mt-2 py-1 bg-white text-indigo-600"
          onClick={() => setSize(size + 1)}
        >
          load more
        </button>
      </div>

      {/* <InView
        root={null}
        rootMargin={"10px"}
        threshold={0.9}
      >
        {({ inView, ref, entry }) => {
          if (entry?.isIntersecting && isLoading === false) {
           console.log(isLoading) 
          return setSize(size + 1);
          }
          return <div className={`h-5 bg-red-200 `} ref={ref}></div>;
        }}
      </InView> */}
    </div>
  );
};

export default RelPost;
