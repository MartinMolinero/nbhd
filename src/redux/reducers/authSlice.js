"use client"

import { createSlice } from '@reduxjs/toolkit'
import { userLogin, logout } from "../actions/authActions";

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        [logout]: (state) => {
            state.loading = false;
            state.userToken = null;
            state.userInfo = {};
        },
        [userLogin]: (state, { payload }) => {
            console.log(userLogin);
            state.userInfo = payload.userInfo;
            state.userToken = payload.token;
            state.loading = false;
        }
    },
});

export default authSlice.reducer;