import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

let mounted = Date.now();
let lastRender = Date.now();

const CounterState = () => {
  const [count, setCount] = useState(0);
  const now = Date.now();
  const mountedElapsed = (now - mounted) / 1000;
  const lastRenderElapsed = (now - lastRender) / 1000;
  lastRender = now;

  return (
    <div>
      <div>Count: {count}</div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <div>Mounted time: {mountedElapsed.toFixed(1)} seconds</div>
      <div>Time since last render: {lastRenderElapsed.toFixed(1)} seconds</div>
    </div>
  );
};

export default CounterState;
