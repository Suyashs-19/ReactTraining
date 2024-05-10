import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import cartSlice from "./CartSlice";
import fetchStatusSlice from "./FetchStatusSlice";


const store = configureStore({
    reducer:{
        items:itemSlice.reducer,
        cart:cartSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer
    }
});

export default store;