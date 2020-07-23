import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './saga'
console.log(reducers,'reducers');
const sagaMiddleware = createSagaMiddleware()  //创建一个sage
const reducer = combineReducers(reducers)
const store = applyMiddleware(sagaMiddleware)(createStore)(reducer)
sagaMiddleware.run(rootSaga);//

export default store
