import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productCategory } from "./ApiSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    [productCategory.reducerPath]: productCategory.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productCategory.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

setupListeners(store.dispatch);
