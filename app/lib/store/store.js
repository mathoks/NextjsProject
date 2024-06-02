import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../features/Nav/navSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      nav: navSliceReducer,
    },
  });
};
