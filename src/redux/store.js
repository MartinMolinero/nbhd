"use client"

import { configureStore } from "@reduxjs/toolkit";

import { authMiddleware } from "@redux/middlewares/authMiddleware";

import announcementsReducer from "./reducers/announcementsSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    announcementsReducer,
    authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});