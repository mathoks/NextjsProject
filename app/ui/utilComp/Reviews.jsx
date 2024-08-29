"use client";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import { is } from "immutable"; // Assuming you're using Immutable.js for state management
import React, {
  useMemo,
  useEffect,
  useState,
  memo,
  startTransition,
} from "react"; // Use useState instead of useOptimistic
import { Avatar } from "@mui/material";

import Stars from "./Stars";
import Reviewsummary from "./Reviewsummary";
const Reviews = memo(
  function ReviewsCol(props) {
    const comment = useAppSelector((state) => state.review.comment);
    const initialOptimisticReviews = useMemo(() => {
      // Handle initial state here
      if (props.reviews) {
        return [...props.reviews]; // Use props.reviews for initial data
      }
      return []; // Or an empty array if no initial reviews
    }, [props.reviews]);

    const [optimisticReviews, setOptimisticReviews] = useState(
      initialOptimisticReviews
    );
    const toggleClass = (e) => {
      const { classList } = e.target;
      classList.toggle("line-clamp-none");
      
    };

    useEffect(() => {
      if (comment !== "") {
        startTransition(() => {
          setOptimisticReviews((prevState) => [
            ...prevState,
            { review: comment },
          ]);
        });
      }
    }, [comment]); // Only update on comment change

    return (
      <div className="space-y-4 px-4">
        <p>What People are saying about this Product</p>
        <Reviewsummary/>
        <ul className="space-y-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          {optimisticReviews?.map((rev, id) => (
            <li className=" py-2  space-y-3" key={id}>
              <span className="flex space-x-2 ">
                <Avatar />
                <span className="space-y-1">
                  <p className="line-clamp-1 font-medium first-letter:capitalize">
                    Tom
                  </p>

                  <Stars rating={2} />
                </span>
              </span>
              <p onClick={toggleClass} className="line-clamp-2">
                {rev.review}
              </p>
              <p className="text-slate-800">
                10 people found this review helpfull
              </p>
              <span className="flex items-center justify-between pt-8">
                <p className="">Was this review helpfull?</p>{" "}
                <span className="flex justify-end space-x-2">
                  <button className="font-medium  px-2 rounded-md ring-1">Yes</button>
                  <button className="font-medium px-2 rounded ring-1">No</button>
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className=" text-blue-500 font-medium">See all reviews</p>
      </div>
    );
  },
  (prevProps, nextProps) => is(prevProps.reviews, nextProps.reviews)
); // Memoization based on reviews

export default Reviews;
