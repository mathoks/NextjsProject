import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    showBox: false,
    openDialog: false,
    comment: '',
    rating: ''
}

const ReviewSliceReducer = createSlice({
initialState,
name: 'review',
reducers: {
    
    setRevBox: (state, action) => {
        state.showBox = action.payload;
        state.openDialog = false
    },
    setComment:(state, action)=>{
        state.comment = action.payload
    },
   setRating:(state, action)=>{
        state.rating = action.payload
    },
    setOpenDialog: (state, action) => {
        if(!state.openDialog)
        state.openDialog = true;
        else state.openDialog = false;
    },
    resetBox : (state)=>{
        if(state.showBox){
        state.showBox = false;
        state.comment = '';
         state.rating = ''
        }
    else {}
    }
}
});

export const { setRevBox, resetBox,setRating, setOpenDialog, setComment } = ReviewSliceReducer.actions
export default ReviewSliceReducer.reducer
