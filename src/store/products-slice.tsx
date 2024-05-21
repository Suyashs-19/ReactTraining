import { createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
}

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, actions) {
      console.log(actions.payload);
      state.items = [...actions.payload];
    },
    addFilteredProducts(state, actions) {
      console.log(actions.payload);
      state.filteredItems = [...actions.payload];
    },
  },
});

export const { addProducts, addFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
