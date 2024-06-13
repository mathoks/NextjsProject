import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: "",
    nav: true,
    navToggle: true

}
const navSliceReducer = createSlice({
initialState,
name: 'nav',
reducers: {
    setPath: (state, action) => {
        state.path = action.payload
    },
    setNav: (state, action) => {
        state.nav = action.payload
    },
    setNavToggle: (state, action) => {
        state.navToggle = action.payload
    }
}
});

export const { setNav, setPath, setNavToggle } = navSliceReducer.actions
export default navSliceReducer.reducer