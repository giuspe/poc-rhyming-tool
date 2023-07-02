import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: parseInt(props.start)
    }
  }

  increase() {
    this.setState({ counter: this.state.counter + 1 })
  }
  
  decrease() {
    this.setState({ counter: this.state.counter - 1 })
  }
  render() {
    return (
      <div className="Counter">
        <button onClick={() => this.decrease()}>-</button>
        <span>You clicked {this.state.counter} times</span>
        <button onClick={() => this.increase()}>+</button>
      </div>
    );
  }
}

export default Counter;
