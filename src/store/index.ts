import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import cartSlice from "./CartSlice";


const store = configureStore({
    reducer:{
        items:itemSlice.reducer,
        cart:cartSlice.reducer
    }
});

export default store;