import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: { items: [], quantity: 0, totalAmount: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //   if not in the cart
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalAmount: newItem.Price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalAmount += newItem.Price;
      }

      //   check if item exists in our items array
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalAmount =
          existingItem.totalAmount - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
