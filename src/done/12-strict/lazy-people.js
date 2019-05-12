import React, { useState, lazy, Suspense, StrictMode } from 'react';
import Form from 'react-bootstrap/Form';
import Loading from '../../shared/loading';

const People = lazy(() => import('./people'));

const StrictAndLazyPeople = () => {
  const [selected, setSelected] = useState(false);

  return (
    <StrictMode>
      <Form.Check
        type="checkbox"
        checked={selected}
        onChange={() => setSelected(!selected)}
        label="Display characters"
      />

      <Suspense fallback={<Loading />}>{selected && <People />}</Suspense>
    </StrictMode>
  );
};

export default StrictAndLazyPeople;
