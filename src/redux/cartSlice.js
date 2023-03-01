import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    clearCart: (state) => {
      state.products = [];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((item,index)=> { return index!==action.payload})
      // state.products.splice(action.payload,1)
    },
  },
});

export const { addProduct, clearCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
