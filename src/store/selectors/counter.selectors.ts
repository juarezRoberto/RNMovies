import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selectCountState = (state: RootState) => state.counter;

export const selectCounter = createSelector(
  selectCountState,
  state => state.value,
);
