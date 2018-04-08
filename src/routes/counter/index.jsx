import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  }

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  }

  handleIncrementIfOdd = () => {
    if (this.state.value % 2 !== 0) {
      this.handleIncrement();
    }
  }

  handleIncrementAsync = () => {
    setTimeout(this.handleIncrement, 1000);
  }

  render() {
    return (
      <p>
        Clicked: {this.state.value} times
        {' '}
        <button onClick={this.handleIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.handleDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.handleIncrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.handleIncrementAsync}>
          Increment async
        </button>
      </p>
    );
  }
}

export default Counter;
