"use client"

import { createAction } from '@reduxjs/toolkit';

export const userLogin = createAction('auth/login', () => {
    const data = {
        name: 'Martin',
        lastName: 'Molinero',
        email: 'martin@me.com',
        isAdmin: false,
        userToken: 'mmmmm'
    }

    console.log("here");

    return {
        payload: data
    }
});

export const logout = createAction('auth/logout', () => {
    return {
        payload: {}
    }
});