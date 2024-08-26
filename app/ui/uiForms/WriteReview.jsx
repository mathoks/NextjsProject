"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import React, { memo, useOptimistic } from "react";
import { useEffect, useState } from "react";
import {useFormState} from 'react-dom'
import { is } from "immutable";
import { addReview } from "@/app/actions/users/addReview";
import toast from 'react-hot-toast'
import { setComment } from "@/app/lib/features/Review/ReviewSlice";
import { useDispatch } from "react-redux";
import { Star } from "@mui/icons-material";
import {Avatar} from '@mui/material'
const WriteReview = ({params}) => {
   
  const ReviewState = useAppSelector((state) => state.review.showBox);
  const CommentState = useAppSelector((state) => state.review.comment);
  const [active, setActive] = useState(true);
  const [state, dispatch] = useFormState(addReview, {});
  const dispatchRedux = useAppDispatch()
 
console.log(CommentState)
  const handlechange = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      setActive(false);
      e.target.nextSibling.style.visibility = "visible";
      e.target.nextSibling.innerText = `${value.length}/200`;
      if (value.length > 200) {
        e.target.nextSibling.style.color = "red";
        setActive(true);
      } else {
        e.target.nextSibling.style.color = "black";
      }

      
     
    } else {
      setActive(true);
      e.target.nextSibling.style.visibility = "invisible";
      e.target.nextSibling.innerText = "";
    }
   
  };

  useEffect(() => {
    const notify = () => toast(state.message);  
    if (state.success === true)
    notify();
  },[state.success, state.message]);
  
 const dispatComment = (formData)=>{
    const review = formData.get('review')
    dispatchRedux(setComment(review));
    // dispatch(formData)
 }

  return (
    <div
      className={`  grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:px-24 lg:px-24 rounded-sm justify-center items-center p-2 px-4 shadow-sm ${
        ReviewState ? "visible" : "invisible h-0"
      }`}
    >
      <form className="space-y-8 size-full " action={dispatComment}>
      <div className="">
        <div className="flex space-x-2">
        <Avatar/>
        <div className="space-y-2">
        <p className="font-medium ">John Paul</p>
        <p>Reviews are public and include your account information</p>
        </div>
        </div>
       
      </div>
         <div className="rating flex space-x-4 justify-center">
            <input type="radio" name="rating" id='star5' value={5} className="sr-only"/>
            <label htmlFor="star5"><Star/></label>
            <input type="radio" name="rating" value={4} id='star4' className="sr-only"/>
            <label htmlFor="star4"><Star/></label>
            <input type="radio" value={3}  name="rating" id='star3' className="sr-only"/>
            <label htmlFor="star3"><Star/></label>
            <input type="radio" name="rating" value={2}  id='star2' className="sr-only"/>
            <label htmlFor="star2"><Star/></label>
            <input type="radio" value={1}  id='star1' className="sr-only"/>
            <label htmlFor="star1"><Star/></label>
        </div> 
      <div className='space-y-1'>
        <textarea
          minLength={2}
          maxLength={200}
          required
          id="text-rev"
          placeholder="Describe your experience here...."
          onChange={handlechange}
          rows={4}
          name="review"
          autoFocus
          className=" bg-white rounded-t-sm  p-2 w-[100%] box-border ring-1"
        />
        <pre className="text-[11px]"></pre>
         </div>   
        <input name="product"  defaultValue= {params} className="sr-only "/>
        <span className="flex justify-end">
          <button
            disabled={active}
            className="ring-1 px-2.5 py-1 text-blue-400 rounded-full disabled:opacity-50 shadow-md"
          >
            submit
          </button>
        </span>
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   review: state.review.showBox,
// });

export default memo(WriteReview, (prev, next)=>is(prev.params, next.params));
