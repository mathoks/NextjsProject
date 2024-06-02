import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: true,
};

const subNavSlice = createSlice({
  initialState,
  reducers: {
    hideNav: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { hideNav } = subNavSlice.actions;
export default subNavSlice.reducer;
