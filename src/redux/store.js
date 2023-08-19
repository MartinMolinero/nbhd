import { configureStore } from "@reduxjs/toolkit";
import announcementsReducer from "./features/announcementsSlice";

export const store = configureStore({
  reducer: {
    announcementsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});