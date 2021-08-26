import { configureStore as configureRTKStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import { dogApiSlice } from "../features/dogs/dogsApiSlice";

export const configureStore = (preloadedState = {}) =>
  configureRTKStore({
    reducer: {
      counter: counterReducer,
      [dogApiSlice.reducerPath]: dogApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(dogApiSlice.middleware);
    },
    preloadedState,
  });

export const store = configureStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
