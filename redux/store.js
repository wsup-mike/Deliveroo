import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
import restaurantReducer from "../features/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer, // adding this reducer connects new slice to overall global store
    restaurant: restaurantReducer, // add next reducer
  },
});
