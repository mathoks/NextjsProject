import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../features/Nav/navSlice";
import modalSliceReducer from "../features/Modals/modalSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
      nav: navSliceReducer,
      modal: modalSliceReducer
    },
  });
};
