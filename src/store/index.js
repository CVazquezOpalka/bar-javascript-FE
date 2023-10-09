import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/es/storage";
import conterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import thunk from "redux-thunk";

const configReducer = {
  key: "beer-market",
  storage,
};

const rootReducer = combineReducers({
  counter: conterSlice.reducer,
  cart: cartSlice.reducer,
  auth: authSlice.reducer,
});

const persistRedux = persistReducer(configReducer, rootReducer);

const store = configureStore({
  reducer: persistRedux,
  middleware: [thunk]
});

export default store;
