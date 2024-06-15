import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../features/Nav/navSlice";
import modalSliceReducer from "../features/Modals/modalSlice"
import drawerSliceReducer from "../features/Drawer/drawerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      nav: navSliceReducer,
      modal: modalSliceReducer,
      drawer: drawerSliceReducer
    },
  });
};
