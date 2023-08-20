"use client"

import { createSlice } from '@reduxjs/toolkit'
import { userLogin, logout } from "../actions/authActions";

import cookieCutter from 'cookie-cutter';

const userToken = cookieCutter.get('userToken') ? cookieCutter.get('userToken') : null;

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken, // for storing the JWT
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
            state.userInfo = payload.userInfo;
            state.userToken = payload.token;
            state.loading = false;
        }
    },
});

export default authSlice.reducer;