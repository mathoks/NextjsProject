"use client";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import { is } from "immutable"; // Assuming you're using Immutable.js for state management
import React, {
  useMemo,
  useEffect,
  useState,
  memo,
  startTransition,
  useCallback,
} from "react"; // Use useState instead of useOptimistic
import { Avatar } from "@mui/material";

import Stars from "./Stars";
import Reviewsummary from "./Reviewsummary";
import { addLiked } from "@/app/actions/users/addLiked";
import Modal from "./modal";
import HomeMore from "../Buttons/HomeMore";

const Reviews = memo(
  function ReviewsCol(props) {
    const { comment: comments, prod, storeId} = props;
    
    const comment = useAppSelector((state) => state.review.comment);
    const [push, setPush] = useState(false);
    const initialOptimisticReviews = useMemo(() => {
      // Handle initial state here
      if (comments) {
        return [...comments]; // Use props.reviews for initial data
      }
      return []; // Or an empty array if no initial reviews
    }, [comments]);

    const [optimisticReviews, setOptimisticReviews] = useState(
      initialOptimisticReviews
    );

    const FormattedDate = memo(function My({ timestamp }) {
      const date = new Date(timestamp);
      return (
        <p className=" text-slate-700 text-sm">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
      );
    });

    const toggleClass = (e) => {
      const { classList } = e.target;
      classList.toggle("line-clamp-none");
    };

    const pushReaction = async (e) => {
      const {
        dataset: { val },
      } = e.target;
      setPush(true);
      try {
        const done = await addLiked(val);
        console.log(done)
      } catch (error) {
        console.log("failed");
      } finally {
        setPush(false);
      }
    };

    

    useEffect(() => {
      if (
        comment.hasOwnProperty("comment") ||
        comment.hasOwnProperty("review")
      ) {
        startTransition(() => {
          setOptimisticReviews((prevState) => [
            ...prevState,
            comment,
            // { comment: comment , review: Number(rating) , createdAt: Date.now(), commenter : { name: user.name, image: user.image } },
          ]);
        });
      }
    }, [comment]); // Only update on comment change

    return optimisticReviews.length === 0 ? (
      <p className="p-4">No Reviews yet be the first to drop a review</p>
    ) : (
      <div className="space-y-4">
        <p className="px-4">What People are saying about this Product</p>
        <Reviewsummary product={prod} prevRate={comment?.review || 0} />
        <ul className="px-4 space-y-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          {optimisticReviews?.map(
            ({ createdat, comment, review, user: { name, image, } }, idx) => (
              <li className=" py-2  space-y-3 relative" key={idx}>
               <span className="flex justify-between">

              
                <span className="flex space-x-2 ">
                  <Avatar src={image} />
                  <span className="space-y-1">
                    <p className="line-clamp-1 font-medium first-letter:capitalize">
                      {name}
                    </p>
                    <span className="flex space-x-4">
                      <Stars rating={review} />
                      <FormattedDate timestamp={createdat} />
                    </span>
                  </span>
                </span>
                <HomeMore id={createdat}/>
                </span>
                <p onClick={toggleClass} className="line-clamp-2">
                  {comment}
                </p>
                <p className="text-slate-800">
                  <span className="font-medium"> 10</span> people found this
                  review helpfull
                </p>
                <span className="flex items-center justify-between pt-8">
                  <p className="">Was this review helpfull?</p>{" "}
                  <span className="space-x-2 ">
                    <button
                      className="font-medium  px-2 rounded-md ring-1 hover:bg-blue-500 hover:text-white"
                      data-val={1}
                      disabled={push}
                      onClick={pushReaction}
                    >
                      Yes
                    </button>

                    <button
                      className="font-medium px-2 rounded ring-1  hover:bg-blue-500 hover:text-white"
                      data-val={-1}
                      disabled={push}
                      onClick={pushReaction}
                    >
                      No
                    </button>
                  </span>
                </span>
                <Modal
                  flag={{ tag: "Flag as inappropriate",}}
                  flag2={{ tag: "Flag as spam",  }}
                  comment={ storeId  ? { tag: "Comment", } : '' }
                  value={createdat}
                />
                
              </li>
            )
          )}
        </ul>

        <p className=" text-blue-500 font-medium px-4">See all reviews</p>
      </div>
    );
  },
  (prevProps, nextProps) => is(prevProps.reviews, nextProps.reviews)
); // Memoization based on reviews

export default Reviews;
