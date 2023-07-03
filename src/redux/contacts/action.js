import { baseInstance } from '../../tokenAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContact = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const response = await baseInstance.get('contacts');
        return response.data;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await baseInstance.post('contacts', contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await baseInstance.delete(`contacts/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
