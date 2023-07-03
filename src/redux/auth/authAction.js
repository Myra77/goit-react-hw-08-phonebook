import * as api from '../../tokenAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk(
    'users/signUp',
    async (body, thunkAPI) => {
        try {
            const response = await api.baseInstance.post('/users/signup', body);
            api.setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const signIn = createAsyncThunk(
    'users/signIn',
    async (body, thunkAPI) => {
        try {
            const response = await api.baseInstance.post('/users/login', body);
            api.setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
    try {
        await api.baseInstance.post('/users/logout');
        api.clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            api.setAuthHeader(persistedToken);
            const response = await api.baseInstance.get('/users/current');
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);