import React, { useState, lazy, Suspense } from 'react';
import Form from 'react-bootstrap/Form';

const People = lazy(() => import('./people'));

const LazyPeople = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Form.Check
        type="checkbox"
        checked={selected}
        onChange={() => setSelected(!selected)}
        label="Display characters"
      />

      {selected && (
        <Suspense fallback={<div>Loading...</div>}>
          <People />
        </Suspense>
      )}
    </div>
  );
};

export default LazyPeople;
