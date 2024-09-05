import React, { memo, Suspense, useEffect, useId, useLayoutEffect, useState } from "react";
import Stars from "./Stars";
import ProgressBar from "./ProgressBar";
import getReviewsSumm from "@/app/actions/users/getReviewsSumm";

const Reviewsummary = ({
  product,
}) => {
// console.log(product)
//   const freq = new Map();
//   Reviews.sort((a, b) => b - a).map((rating, id) => {
//     freq.set(rating, (freq.get(rating) || 0) + 1);
//   });
const [val, setval ] =useState(0)
const [val1, setval1 ] =useState(0)
  const ProgressBars = memo(function Ratingss() {
    const [list, setList] = useState([0, 0, 0, 0, 0, 0]);
    
    // useLayoutEffect(() => {
    //   .forEach((k, v) => {
    //     const percent = Math.trunc(Number(k / Reviews.length) * 100);

    //     setList((prev) => {
    //       prev[v] = percent;
    //       return [...prev];
    //     });
       
    //   });
    // }, [freq]);

   useEffect(()=>{
    const getReviesSumm = async()=>{
      const data = await getReviewsSumm(product)
      const {average_rating, total_reviews, prod_id, ...rest } = data
      
      setval(average_rating)
      setval1(total_reviews)
      Object.values(rest).forEach((k, v, ) => {
          setList((prev) => {
          prev[v+1] = Number(k);
          return [...prev];
        });
       
      });
     
    }
    getReviesSumm()
   }, [])

    return list.map((num, id) => {
     if(id === 0) return;
      return (
        <li key={id} className="">
          <span className="flex items-center font-medium space-x-2">
            <p>{id}</p>
            <p className="w-full">
              <ProgressBar value={num}  h={10}/>
            </p>
          </span>
        </li>
      );
    });

  });
 

  return (
     <div className="grid grid-cols-3  gap-x-0  -ml-6 w-[calc(100%-8px)]">
     <div className="flex col-span-1 flex-col text-[12px] items-center ">
     <Stars rating={Number(val)+ '.0'} size={'font-semibold text-4xl '} size1={'flex-col'}/>
     <p className="">{val1}</p>
     </div>
      <ul className="w-full flex flex-col-reverse col-span-2">
        <Suspense fallback={"...loading"}>
          <ProgressBars  />
        </Suspense>
      </ul>  
    </div>
  );
};

export default Reviewsummary;
