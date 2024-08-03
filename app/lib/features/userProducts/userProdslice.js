import { createSlice } from "@reduxjs/toolkit";
import { deleteEntry } from "../../utills/removeFromArray";


const initialState = {
    formdata: {data1:{}, place:{}, data2:[] },
    loading: false,
    data: []

}
const userProdSliceReducer = createSlice({
initialState,
name: 'userProd',
reducers: {
    setFormdata: (state, action) => {
        
        if(state.step === 1){
        const prev = state.formdata.data1
        state.formdata.data1 = {...prev, ...action.payload}
        }
        if(state.step === 2){
            
            if(!Array.isArray(action.payload) && Object.keys(action.payload)[0] === 'country'){
            state.formdata.place = {...action.payload};
            }
            else {
              const  prev = state.formdata.data2 
                state.formdata.data2 = deleteEntry(prev, action.payload)
            }
    }},
   

    setData: (state, action) => {
        state.data = [...action.payload]
    },
    setIsLoading: (state, action) => {
        state.loading = action.payload
    },
    
}
});

export const { setData, setFormdata, setIsLoading } = userProdSliceReducer.actions
export default userProdSliceReducer.reducer