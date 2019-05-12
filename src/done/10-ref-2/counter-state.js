import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';

const CounterState = () => {
  const [count, setCount] = useState(0);
  const now = Date.now();
  const times = useRef({
    mounted: now,
    lastRender: now
  });
  const mountedElapsed = (now - times.current.mounted) / 1000;
  const lastRenderElapsed = (now - times.current.lastRender) / 1000;
  times.current.lastRender = now;

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
