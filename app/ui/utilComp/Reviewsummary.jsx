import React, { memo, Suspense, useId, useLayoutEffect, useState } from "react";
import Stars from "./Stars";
import ProgressBar from "./ProgressBar";

const Reviewsummary = ({
  Reviews = [4, 2, 2, 4, 4, 3, 5, 5, 5, 5, 5, 5, 5],
  Average,
}) => {
  const freq = new Map();
  Reviews.sort((a, b) => b - a).map((rating, id) => {
    freq.set(rating, (freq.get(rating) || 0) + 1);
  });

  const ProgressBars = memo(function Ratingss({ freq }) {
    const [list, setList] = useState([0, 0, 0, 0, 0]);

    useLayoutEffect(() => {
      freq.forEach((k, v) => {
        const percent = Math.trunc(Number(k / Reviews.length) * 100);

        setList((prev) => {
          prev[v] = percent;
          return [...prev];
        });
        console.log(list);
      });
    }, [freq]);

   
    return list.map((num, id) => {
     if(id === 0) return;
      return (
        <li key={id} className="">
          <span className="flex items-center font-medium space-x-2">
            <p>{id}</p>
            <p className="w-full">
              <ProgressBar value={num}  h={8}/>
            </p>
          </span>
        </li>
      );
    });

  });
 

  return (
    <div className="grid grid-cols-2 place-items-start px-2 space-x-4 items-center w-full">
     
     <div>
     <Stars rating={4} />
     {Reviews.length}
     </div> 
      <ul className="w-full flex flex-col-reverse">
        <Suspense fallback={"...loading"}>
          <ProgressBars freq={freq}  />
        </Suspense>
      </ul>
      
    </div>
  );
};

export default Reviewsummary;
