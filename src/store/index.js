import { configureStore } from "@reduxjs/toolkit";
import toggleCart from "./ui-slice";
import cartSlice from "./cart-slice";
// creating
const store = configureStore({
  reducer: { toggleCart: toggleCart.reducer, cartItems: cartSlice.reducer },
});

export default store;
