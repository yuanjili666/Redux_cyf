import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../store/actions/counter'
class Counter extends Component {
  render() {
    console.log(this.props,'传递过来的数据');
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.add(2)}>+</button>
        <button onClick={this.props.minus}>-</button>
        <button onClick={this.props.addAsync}>async+</button>
    <div>{this.props.cyf}</div>
    <div>{this.props.str+this.props.num}</div>
      </div>
    )
  }
}

export default connect(state => state.counter, actions)(Counter)