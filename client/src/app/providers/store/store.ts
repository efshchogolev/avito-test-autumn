import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./slices/apiSlice.ts";
// import modalReducer from "./slices/modalSlice.ts";

const combinedReducer = combineReducers({
  // modal: modalReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
