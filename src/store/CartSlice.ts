import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../Product";

const initialState:Product[]=[]
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
                state.push(action.payload)
        },
        removeItemFromCart:(state,action)=>{
            return state.filter((item:Product)=>item.id!== action.payload.id)
            // dont forget ' return '
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice;