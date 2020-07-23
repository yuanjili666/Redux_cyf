
import { all, call } from 'redux-saga/effects'
import watchAddAsync from './counter'

export default function* rootSaga() {
  yield all([call(watchAddAsync)])
}

