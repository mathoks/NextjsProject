"use client";
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
import Modal from "./modal";
import HomeMore from "../Buttons/HomeMore";
import getUserReview from "@/app/actions/users/getUserReview";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import { setCompleted } from "@/app/lib/features/Review/ReviewSlice";




const ReviewCard = memo(function NewEntry({prod_comment}){
    const {data: {user : {name , image}}} = useSession()
    const {comment, createdat, review} = prod_comment
    
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
return <div className="space-y-4">
<p className="px-4 font-medium">Your review</p>

<ul className="px-4 space-y-2 grid grid-cols-1 gap-4 md:grid-cols-2">
  <li className=" py-2  space-y-3 relative">
    <span className="flex justify-between items-start">
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
      <HomeMore id={createdat} />
    </span>
    <p onClick={toggleClass} className="line-clamp-2">
      {comment}
    </p>

    <button className="font-medium text-blue-500">
      Edit your review
    </button>
    <Modal
      Delete ={{ tag: "Delete" }}    
      value={createdat}
    />
  </li>
</ul>
</div>
})
const UserReview = memo(
  function ReviewsUser(props) {
    const { prod,  category_id, user_id } = props;
    const [userComment, updateUserComment] = useState({});
    const [error, setError] = useState(false);
     const dispatch = useAppDispatch();
    const comp = useAppSelector((state)=>state.review.completed)
    const [loading, setIsLoading] = useState(false);
    const initialOptimisticReviews = useMemo(() => {
      // Handle initial state here
    
      if (Object.keys(userComment).length > 0) {
       
        return userComment; // Use props.reviews for initial data
      }
      return {}; // Or an empty array if no initial reviews
    }, [userComment]);

    const [optimisticReviews, setOptimisticReviews] = useState(
      initialOptimisticReviews
    );

    console.log(comp)

    useEffect(() => {
      const fetchUserComment = async () => {
       
        setIsLoading(true);
        const userReview = await getUserReview(prod, user_id, category_id);
       try {
       if(Object.keys(userReview.data).length > 0) {
        updateUserComment(userReview.data)
        dispatch(setCompleted())
           startTransition(() => {
             setOptimisticReviews({...userComment})
           })} else {};
          
       } catch (error) {
        setError(true);
       }
        finally {
        setIsLoading(false);
      }
    }
    fetchUserComment()
    }, [userComment.review]); // Only update on comment change
   
    
    if (loading) return <p className="text-center ">loading....</p>;
    if (error) return <p>could not load your review</p>;
    return Object.keys(optimisticReviews).length === 0 ? (
      ""
    ) : <ReviewCard prod_comment = {optimisticReviews}/>
},  
  (prevProps, nextProps) => is(prevProps.reviews, nextProps.reviews)
); // Memoization based on reviews

export default UserReview;
