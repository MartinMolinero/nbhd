"use client"

import { createSlice } from '@reduxjs/toolkit'
import { userLogin, logout } from "../actions/authActions";
import isBrowser from '@utils/isBrowser';


let userToken = null;
if(isBrowser()) {
    userToken = window.localStorage.getItem('userToken') ?
        window.localStorage.getItem('userToken') : null;
}

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken, // for storing the JWT
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