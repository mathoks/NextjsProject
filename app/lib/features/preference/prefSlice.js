import { createSlice } from "@reduxjs/toolkit";
import { deleteEntry } from "../../utills/removeFromArray";


const initialState = {
    formdata: {data1:{}, place:{}, data2:[] },
    step: 1,
    stepEle : null,
    isComplete: false

}
const preferenceSliceReducer = createSlice({
initialState,
name: 'pref',
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
    setStep: (state, action) => {
        state.step = action.payload
    },

    setElem: (state, action) => {
        state.stepEle = action.payload
    },
    setIsComplete: (state, action) => {
        state.isComplete = action.payload
    },
    resetSlice: (state, action)=>{
        if(action === 'partial'){
        state.formdata.data2 = initialState.formdata.data2;
        state.formdata.place = initialState.formdata.place;
        }
    else state= initialState;
    }
}
});

export const { setElem, setFormdata, setStep, setIsComplete, resetSlice} = preferenceSliceReducer.actions
export default preferenceSliceReducer.reducer