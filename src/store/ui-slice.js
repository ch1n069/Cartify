import { createSlice } from "@reduxjs/toolkit";

const toggleCart = createSlice({
  // name
  name: "ui",
  //   state
  initialState: { cartIsVisible: false },
  //  all the action
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

// export of the actions
export const toggleCartActions = toggleCart.actions;
export default toggleCart;
