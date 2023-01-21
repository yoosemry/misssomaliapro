import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./feutures/modal/modelSlice"
import competitorReducer from "./feutures/competitor/competitorSlice";


export const store = configureStore({
    reducer: {

       modal: modalReducer,
       competitor : competitorReducer

    }
})