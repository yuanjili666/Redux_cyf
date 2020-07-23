import { ADD, MINUS } from '../action-types/counter'

export default (state = {//设置初始值
        number: 0,
        num:100,
        str:'初始值设置：'
}, action) => {
  const {type, payload} = action;
  console.log('旧的state',state);
  switch(type) {
    case ADD:
      return {number: state.number + (Number(payload) || 1),cyf:"类型是：ADD;number: state.number + (Number(payload) || 1)"}
    case MINUS:
      return {number: state.number - (Number(payload) || 1),cyf:'类型是：MINUS;number: state.number - (Number(payload) || 1)'}
    default:
      console.log('新的state',state);
      return state
  }
  
}
