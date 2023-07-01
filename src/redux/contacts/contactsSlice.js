import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact } from './action';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handleFulfilled = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
    state.error = null;
};

const handleRejected = (state, { error: { message } }) => {
    console.log(message);
    state.error = `Oops! We have a problem: ${message}.`;
    state.isLoading = false;
};

const handlePending = state => {
    state.isLoading = true;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        resetContacts(state) {
            state.items = initialState.items
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContact.fulfilled, handleFulfilled)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    task => task.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addMatcher(
                isAnyOf(
                    fetchContact.pending,
                    addContact.pending,
                    deleteContact.pending
                ),
                handlePending
            )
            .addMatcher(
                isAnyOf(
                    fetchContact.rejected,
                    addContact.rejected,
                    deleteContact.rejected
                ),
                handleRejected
        );
    },
});

export const { resetContacts } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;