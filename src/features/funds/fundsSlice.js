import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    addFunds: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addFunds } = fundsSlice.actions;
export default fundsSlice.reducer;
