"use client"

import { configureStore } from "@reduxjs/toolkit";
import announcementsReducer from "./reducers/announcementsSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    announcementsReducer,
    authReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});