import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import People from './people';

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

      {selected && <People />}
    </div>
  );
};

export default LazyPeople;
