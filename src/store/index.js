import { configureStore } from "@reduxjs/toolkit";
import toggleCart from "./ui-slice";
// creating
const store = configureStore({ reducers: { toggleCart: toggleCart.reducer } });

export default store;
