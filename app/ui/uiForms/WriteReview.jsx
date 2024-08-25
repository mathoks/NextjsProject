"use client";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const WriteReview = () => {
  const ReviewState = useAppSelector((state) => state.review.showBox);
  const [active, setActive] = useState(true);
  
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

  return (
    <div
      className={` bg-indigo-100 grid place-items-center rounded-sm justify-center items-center p-2 m-4 ${
        ReviewState ? "visible" : "invisible h-0"
      }`}
    >
      <form className="space-y-2" action={() => console.log("jj")}>
        <textarea
          minLength={2}
          maxLength={200}
          required
          id="text-rev"
          onChange={handlechange}
          rows={4}
          cols={36}
          autoFocus
          className=" bg-white rounded-t-sm  p-2"
        />
        <pre className="text-[11px]"></pre>
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

const mapStateToProps = (state) => ({
  review: state.review.showBox,
});

export default connect(mapStateToProps)(WriteReview);
