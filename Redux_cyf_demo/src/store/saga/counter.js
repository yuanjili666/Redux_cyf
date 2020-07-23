
import { put, takeEvery, call } from 'redux-saga/effects' //引入-redux-saga
import { ADDASYNC, ADD } from '../action-types/counter'//引入redux中的动作类型

//创建一个Promise
const delay = ms => new Promise(resolve => 
  setTimeout(resolve, ms))

function* addAsync() {
  yield call(delay, 1000)//调用方法
  yield put({type: ADD}) //
}

export default function* watchAddAsync() {
  yield takeEvery(ADDASYNC, addAsync)
}