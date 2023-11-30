import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/ProductionReducer";


export const productStore = configureStore({
    reducer:{
        productReducer
    }
})