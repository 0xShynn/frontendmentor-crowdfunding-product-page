import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  goal: 100000,
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
export const selectFunds = (state) => state.funds.value;
export default fundsSlice.reducer;
