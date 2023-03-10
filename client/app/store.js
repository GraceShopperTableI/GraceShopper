import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import productsSlice from "../features/products/productsSlice";
import userSlice from "../features/userProfile/userSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSlice,
    users: userSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
