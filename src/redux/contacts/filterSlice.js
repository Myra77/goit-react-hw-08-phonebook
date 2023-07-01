import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
    resetFilter(state) {
      return (state = '');
    }
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;