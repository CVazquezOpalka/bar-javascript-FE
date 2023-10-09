import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], total: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      const totalPrice = newItem.price * newItem.amount;
      const findProduct = state.items.find((item) => item.id === newItem.id);
      if (!findProduct) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quant: newItem.amount,
          img: newItem.img,
        });
      } else {
        findProduct.quant = findProduct.quant += newItem.amount;
      }
      state.total = state.total += totalPrice;
    },
    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const updateItem = state.items[index];
      if (updateItem.quant === 1) {
        state.items.splice(index, 1);
      } else {
        updateItem.quant--;
      }
    },
    cleanStore(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { addItems, removeItem, cleanStore } = cartSlice.actions;

export default cartSlice;
