import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    token: null, // for storing the JWT
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.token = null;
            state.userInfo = {};
        },
        login: (state) => {
            state.userInfo = {
                name: 'Martin',
                lastName: 'Molinero',
                email: 'martin@me.com',
                isAdmin: false
            }
            state.token = 'mmm rico';
        }
    },
});

export default authSlice.reducer;