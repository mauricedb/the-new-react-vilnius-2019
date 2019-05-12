import React, { Component } from 'react';
import AnalogClock from '../../shared/analog-clock';

class ClockEffect extends Component {
  state = { now: new Date() };
  handle = 0;

  componentDidMount() {
    this.handle = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { now } = this.state;

    return <AnalogClock time={now} />;
  }
}

export default ClockEffect;
