import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, signIn, logout, refreshUser } from './authAction';

const handlePendidng = state => {
    state.isRefreshing = true;
};

const handleFulfilled = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    state.isRefreshing = false;
    state.error = null;
};

const handleRejected = (state, { error: { message } }) => {
    state.error = message;
    state.isRefreshing = false;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
    },
    extraReducers: builder => {
        builder
        .addCase(signUp.fulfilled, handleFulfilled)
        .addCase(signIn.fulfilled, handleFulfilled)
        .addCase(logout.fulfilled, state => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.error = null;
        })
        .addCase(refreshUser.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = null;
        })
        .addMatcher(
            isAnyOf(
                logout.pending,
                signIn.pending,
                signUp.pending,
                refreshUser.pending
            ),
            handlePendidng
        )
        .addMatcher(
            isAnyOf(
                logout.rejected,
                signIn.rejected,
                signUp.rejected,
                refreshUser.rejected
            ),
            handleRejected
        );
    },
});

export const authReducer = authSlice.reducer;