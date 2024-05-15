import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../interfaces/CartProduct";

const initialState:CartProduct[]=[]
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
                state.push(action.payload)
        },
        removeItemFromCart:(state,action)=>{
            return state.filter((item:CartProduct)=>item.id!== action.payload)
            // dont forget ' return '

        },
        updateCartItemQuantity: (state, action) => {
            return state.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                } else {
                    return cartItem;
                }
            });
        },
        
        deacreaseItemFromCart:(state,action)=>{
            return state.map((cartItem)=>{
                if(cartItem.id===action.payload && cartItem.quantity>1){
                    return {...cartItem,quantity:cartItem.quantity-1}
                }
                else return cartItem;
            })
        },
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice;