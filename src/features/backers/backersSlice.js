import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const backersSlice = createSlice({
  name: 'backers',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = backersSlice.actions;
export const selectBackers = (state) => state.backers.value;
export default backersSlice.reducer;
