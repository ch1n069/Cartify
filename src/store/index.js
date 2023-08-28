import { configureStore } from "@reduxjs/toolkit";
import toggleCart from "./ui-slice";
// creating
const store = configureStore({ reducer: { toggleCart: toggleCart.reducer } });

export default store;
