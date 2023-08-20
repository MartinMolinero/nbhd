"use client"

import { createAction } from '@reduxjs/toolkit';
import cookieCutter from 'cookie-cutter';

export const userLogin = createAction('auth/login', () => {
    const data = {
        name: 'Martin',
        lastName: 'Molinero',
        email: 'martin@me.com',
        isAdmin: false,
        userToken: 'mmmmm'
    }

    cookieCutter.set('userToken', data.userToken);

    return {
        payload: {
            name: 'Martin',
            lastName: 'Molinero',
            email: 'martin@me.com',
            isAdmin: false,
            userToken: 'mmmmm'
        }
    }
});

export const logout = createAction('auth/logout', () => {
    cookieCutter.set('userToken', null);
    return {
        payload: {}
    }
});