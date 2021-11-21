import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from './counter.slices.';

export const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});
