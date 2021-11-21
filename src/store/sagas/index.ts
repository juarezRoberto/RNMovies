import { all, fork } from 'redux-saga/effects';
import { watchCounter } from './counter.sagas';

//root saga
export default function* rootSaga() {
  yield all([fork(watchCounter)]);
}
