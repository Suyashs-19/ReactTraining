import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/Product";
const initialState:Product[]=[]

const itemSlice = createSlice({
    name:"items",
    initialState,
    reducers:{
        addItems:(_,action)=>{
            return action.payload
        },
        filterItems:(state,action)=>{
            if (action.payload === "highToLow") {
                state.sort(
                  (itemA, itemB) => itemB.price - itemA.price
                );
              }
              else if (action.payload === "lowToHigh") {
                state.sort(
                  (itemA, itemB) => itemA.price - itemB.price
                );
              } else {
                state.sort(
                  (itemA, itemB) => itemB.rating.rate - itemA.rating.rate
                );
              }
        },
        
    }
});

export const itemAction = itemSlice.actions;
export default itemSlice;