import { configureStore } from "@reduxjs/toolkit";
import {} from "./slices/counter/";
import { counterSlice } from "./slices/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
