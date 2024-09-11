"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import useSWRInfinite from "swr/infinite";

function debounce(func, delay) {
  let timeout;
  return function debounced() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func, delay);
  };
}

const fetcher = (url) =>
  fetch(url, {cache: 'force-cache', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin' : '*' }})
    .then((r) => r.json())
    .catch(() => {
      throw new Error("not found");
    });

const RelPost = ({ prodId, category }) => {
  const getKey = (pageIndex, previousPageData) => {
    
    if (previousPageData && !previousPageData.data) return null;

    if (pageIndex === 0)
      return `https://nextjs-project-if9d.vercel.app/api/getProductHints?limit=5&prodId=${
        prodId.prodId
      }&category=${encodeURIComponent(category)}`;
    else
      return `https://nextjs-project-if9d.vercel.app/api/getProductHints?cursor=${
        previousPageData.nextCursor
      }&limit=5&prodId=${prodId.prodId}&category=${encodeURIComponent(
        category
      )}`;
  };

  const { ref, entry } = useInView({
    rootMargin: "50px",
    threshold: 1,
  });

  const { data, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);
 
  useEffect(() => {
    if (entry?.isIntersecting && !isLoading) {
        debounce(setSize(size + 1), 500)
    }
  }, [entry?.isIntersecting]);

  return (
    <div
      className={`overflow-y-scroll space-x-1 mt-8 mx-auto pb-4 bg-indigo-50 px-2 ${
        data?.length > 0 && data[0]?.data?.length > 0
          ? "h-44 visible"
          : "h-0 invisible"
      }`}
    >
      <ul className="pt-2 min-h-36 space-y-4">
        {data?.map((page, id) => {
          return page?.data?.map((fi, idx) => {
            return (
              <li
                key={idx}
                ref={idx === page.data.length - 1 ? ref : null}
                className=""
              >
                <p className=" first-letter: capitalize first-line:font-semibold">
                  {fi.text}
                </p>
                <div className="flex space-x-2">
                  <p className=" font-medium">Author :</p>
                  <Link
                    href={`/store/${encodeURIComponent(
                      fi.author.name
                    )}/${encodeURIComponent(fi.author.id)}`}
                    className="text-gray-400 hover:underline cursor-pointer active:text-indigo-600 "
                  >
                    {fi.author.name}
                  </Link>
                </div>
              </li>
            );
          });
        })}
      </ul>
      {isLoading ? <p>loading....</p> : ''}
    </div>
  );
};

export default RelPost;
