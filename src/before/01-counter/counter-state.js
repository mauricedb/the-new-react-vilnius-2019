import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CounterState extends Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>Count: {count}</div>
        <Button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </Button>
      </div>
    );
  }
}

export default CounterState;
