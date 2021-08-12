import { configureStore } from '@reduxjs/toolkit';
import backersReducer from '../features/backers/backersSlice';
import fundsReducer from '../features/funds/fundsSlice';

export default configureStore({
  reducer: {
    backers: backersReducer,
    funds: fundsReducer,
  },
});
