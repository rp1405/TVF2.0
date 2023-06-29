import { createSlice } from "@reduxjs/toolkit";
import { getFoodsData } from "../../api/foodoptions";
const initialState = {
  cartItems: [],
  allCategories: [],
  amount: 0,
  category: "Fries",
  onScreen: "Loading",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cartItems = payload.foods;
      state.allCategories = payload.cats;
    },
    increase: (state, { payload }) => {
      state.cartItems[payload].num++;
      state.amount += state.cartItems[payload].price;
    },
    decrease: (state, { payload }) => {
      const curr = state.cartItems[payload].num;
      if (curr > 0) {
        state.cartItems[payload].num--;
        state.amount -= state.cartItems[payload].price;
      }
    },
    changeCat: (state, { payload }) => {
      state.category = payload;
    },
    changeScreen: (state, { payload }) => {
      state.onScreen = payload;
    },
  },
});
export const { increase, decrease, changeCat, changeScreen, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
