import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    route: "",
    show: false ,

}
const drawerSliceReducer = createSlice({
initialState,
name: 'drawer',
reducers: {
    setRoute: (state, action) => {
        state.route = action.payload
    },
    setDrawer: (state, action) => {
        
       !state.show ?  state.show = action.payload : state.show = false
    }
}
});

export const { setDrawer, setRoute } = drawerSliceReducer.actions
export default drawerSliceReducer.reducer