import { PayloadAction } from '@reduxjs/toolkit';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { increment, incrementByAmount } from '../slices/counter.slices.';

// actions are functions !!!

function* counterSaga(action: PayloadAction<number>) {
  console.log('action', action);

  yield put(increment());
}

export function* watchCounter() {
  yield takeLatest(incrementByAmount, counterSaga);
}
