import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [
        ...state.items, // keep whatever's already there
        action.payload, // tack on this payload's value to the items as well
      ];
    },
    removeFromBasket: (state, action) => {
      //??? but he uses this a lot!
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it is not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// add new selector function
export const selectBasketItems = (state) => state.basket.items;

// add new selector based on id. To filter match with given id
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

//sdd new selector that will tally up sum of items in basket into a single value by reducing to a number
// go thru basket with each item, then reduce this array to 1 number
// Pass into reduce: callback, initial value 0
// total is an accumulator, item is each individual item
// Then by the end of looping, the total will accumulate the item.price of all
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
export default basketSlice.reducer;
