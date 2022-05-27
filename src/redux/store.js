import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "../services/postsAPI";

const posts = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
});

export const store = configureStore({
  reducer: posts,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    postsApi.middleware,
  ],
});

setupListeners(store.dispatch);
