import { createSlice } from "@reduxjs/toolkit";

const conterSlice = createSlice({
  name: "counter",
  initialState: { initialValue: 5 },
  reducers: {
    incrementByOne(state) {
      state.initialValue++;
    },
    increment(state, action) {
      state.initialValue += action.payload;
    },
  },
});

export const { incrementByOne, increment } = conterSlice.actions;

export default conterSlice;
