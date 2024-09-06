import React, { memo, Suspense, useEffect, useState } from "react";
import Stars from "./Stars";
import ProgressBar from "./ProgressBar";
import getReviewsSumm from "@/app/actions/users/getReviewsSumm";

/**
 * Renders a list of progress bars based on the provided data.
 * 
 * @param {object} props - Component props.
 * @param {number[]} props.list - An array of numbers representing the review distribution for each rating.
 * 
 * @returns {JSX.Element} A JSX element containing the list of progress bars.
 */
const ProgressBars = memo(function Ratingss({ list }) {
  return list.map((num, id) => {
    return (
      <li key={id} className="">
        <span className="flex items-center font-medium space-x-2">
          <p className="text-[12px]">{id + 1}</p>
          <p className="w-full">
            <ProgressBar value={num} h={10} />
          </p>
        </span>
      </li>
    );
  });
});

/**
 * Displays a review summary for a product, including average rating, total reviews, and review distribution.
 * 
 * @param {object} props - Component props.
 * @param {string} props.product - The product ID or identifier.
 * 
 * @returns {JSX.Element} A JSX element containing the review summary.
 */
const Reviewsummary = ({ product, prevRate}) => {
  const [val, setval] = useState(prevRate);
  const [val1, setval1] = useState(0);
  const [list, setList] = useState(Array(5).fill(0));
console.log(prevRate)
  useEffect(() => {
    const getReviesSumm = async () => {
      const data = await getReviewsSumm(product);
      
      if(Object.keys(data).length > 0){
        const { average_rating, total_reviews, prod_id, ...rest } = data;
      setval(average_rating);
      setval1(total_reviews);
      setList(Object.values(rest).reverse());
    }
    else {
     
      setList((prev)=>prev)
      setval1(1)
      setList(prev=>{
        prev[val-1] = 100;
        return [...prev]
      })
    }
  }
    getReviesSumm();
  }, [product]);

  return (
    <div className="grid grid-cols-3  gap-x-0  -ml-5 w-[calc(100%-8px)]">
      <div className="flex col-span-1 flex-col text-[12px] items-center ">
        <Stars
          rating={typeof val !== "number" ? Number(val).toFixed(1) : val.toFixed(1) }
          size={"font-semibold text-4xl "}
          size1={"flex-col"}
        />
        <p className="">{val1}</p>
      </div>
      <ul className="w-full flex flex-col-reverse col-span-2">
        <Suspense fallback={"...loading"}>
          <ProgressBars list={list} />
        </Suspense>
      </ul>
    </div>
  );
};

export default Reviewsummary;
