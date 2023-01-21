import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
};

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        modalHandle : (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
  
});


export const  { modalHandle }  = modalSlice.actions;

export default modalSlice.reducer