import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../Product";
const initialState:Product[]=[]

const itemSlice = createSlice({
    name:"items",
    initialState,
    reducers:{
        addItems:(_,action)=>{
            return action.payload
        }
    }
});

export const itemAction = itemSlice.actions;
export default itemSlice;