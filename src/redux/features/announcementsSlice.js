import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  creationModalOpen: false,
};

export const announcements = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    openCreationModal: (state) => {
        state.creationModalOpen = true
    },
    closeCreationModal: (state) => {
        state.creationModalOpen = false
    },
  },
});

export const {
  openCreationModal,
  closeCreationModal
} = announcements.actions;

export default announcements.reducer;