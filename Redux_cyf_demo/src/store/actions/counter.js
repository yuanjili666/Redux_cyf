import { ADD, MINUS, ADDASYNC } from '../action-types/counter'
export default {
  //定义动作的类型，传递对应的参数
  add(payload) {
    return {type: ADD, payload}
  },
  minus(payload) {
    return {type: MINUS, payload}
  },
  addAsync(payload) {
    return {type: ADDASYNC, payload}
  }
}