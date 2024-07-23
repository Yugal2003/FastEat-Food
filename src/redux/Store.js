import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice";

const store = configureStore({
    reducer : {
        allCart:cartSlice
    }
})

export default store;