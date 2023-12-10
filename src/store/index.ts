import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { priceApi } from "./apis/pricesApi";
import dbReducer from "./slices/dbSlice";

export const store = configureStore({
  reducer: {
    db: dbReducer,
    [priceApi.reducerPath]: priceApi.reducer,
  },
  middleware: [thunk, priceApi.middleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
