"use client";
import { configureStore } from "@reduxjs/toolkit";
// import packagesReducer from "./features/packages";
export const createStore = () => {
  return configureStore({
    reducer: {
      // packages: packagesReducer,
    },
    //TODO: FIXME
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: true
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
