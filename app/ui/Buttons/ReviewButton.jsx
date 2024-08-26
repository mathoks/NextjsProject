"use client";

import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  setRevBox,
  setOpenDialog,
  resetBox
} from "@/app/lib/features/Review/ReviewSlice";
import { useAppSelector } from "@/app/lib/hooks/hooks";

const ReviewButton = () => {
  const dispatch = useDispatch();

  const ReviewState = useAppSelector((state) => state.review.showBox);
  const DialogState = useAppSelector((state) => state.review.openDialog);

  useEffect(() => {
    return ()=>{
        dispatch(resetBox())
    }
  },[])

  return (
    <div>
      <button
        onClick={() => {
          dispatch(setOpenDialog());
        }}
        className="text-blue-500 px-4 py-2 disabled:opacity-50"
        disabled={ReviewState}
      >
        write a review
      </button>
      <Dialog open={DialogState} onClose={() => dispatch(setOpenDialog())}>
        <DialogTitle>Have you purchased this item?</DialogTitle>
        <DialogContent>
          <p>Please select an option:</p>
          <div className="flex space-x-4">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(setRevBox(true));
              }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatch(setOpenDialog());
              }}
            >
              No
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewButton;
