import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    showBox: false,
    openDialog: false,
}

const ReviewSliceReducer = createSlice({
initialState,
name: 'review',
reducers: {
    
    setRevBox: (state, action) => {
        state.showBox = action.payload;
        state.openDialog = false
    },
    setOpenDialog: (state, action) => {
        if(!state.openDialog)
        state.openDialog = true;
        else state.openDialog = false;
    },
    resetBox : (state)=>{
        if(state.showBox)
        state.showBox = false;
    else {}
    }
}
});

export const { setRevBox, resetBox, setOpenDialog } = ReviewSliceReducer.actions
export default ReviewSliceReducer.reducer