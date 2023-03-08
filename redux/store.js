import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer, // adding this reducer connects new slice to overall global store
  },
});
