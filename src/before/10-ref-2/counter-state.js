import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';

const CounterState = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  if (!ref.current) {
    ref.current = {
      mounted: Date.now(),
      lastRender: Date.now()
    };
  }

  const now = Date.now();
  const mountedElapsed = (now - ref.current.mounted) / 1000;
  const lastRenderElapsed = (now - ref.current.lastRender) / 1000;
  ref.current.lastRender = now;

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
