import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducers/counterSlice";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
    reducer:{
        counter:CounterSlice,
        Cart:cartSlice
    },
})