import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: "",
    nav: true,

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
    }
}
});

export const { setNav, setPath } = navSliceReducer.actions
export default navSliceReducer.reducer