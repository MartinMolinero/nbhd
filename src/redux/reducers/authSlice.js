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
    extraReducers: {
        [logout]: (state) => {
            return {
                ...state,
                loading: false,
                userToken: null,
                userInfo: {}
            }
        },
        [userLogin]: (state, { payload }) => {
            console.log(payload);
            return {
                ...state,
                userInfo: payload.userInfo,
                userToken: payload.userToken,
                loading: false,
            }
        }
    },
});

export default authSlice.reducer;