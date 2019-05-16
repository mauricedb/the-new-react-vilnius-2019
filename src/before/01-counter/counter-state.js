import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CounterState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default CounterState;
