import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: {},
  },
  reducers: {
    addProduct: (state, action) => {
      // console.log(action.payload.itemName)
      if (state.products[action.payload.item.id]) {
        state.products[action.payload.item.id]["count"] = ++state.products[
          action.payload.item.id
        ]["count"];
        //  console.log(state.products[action.payload.item.id]["count"])
      } else {
        state.products[action.payload.item.id] = {
          ...action.payload.item,
          count: 1,
        };
        // console.log(state.products[action.payload.item.id])
      }
    },
    clearCart: (state) => {
      state.products = {};
    },
    removeProduct: (state, action) => {
      // state.products = state.products.filter((item,index)=> { return index!==action.payload})
      // state.products.splice(action.payload,1)
      if(state.products[action.payload]["count"]>1){
          state.products[action.payload]["count"] = --state.products[action.payload]["count"]
      }else{
        delete state.products[action.payload];
      }
      
    },
  },
});

export const { addProduct, clearCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
