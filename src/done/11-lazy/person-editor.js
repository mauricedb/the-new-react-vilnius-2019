import React from 'react';
import Form from 'react-bootstrap/Form';

const PersonEditor = ({ selected, people, dispatch }) => (
  <Form.Group controlId="fullName">
    <Form.Label>Full name</Form.Label>
    <Form.Control
      type="text"
      value={selected.fullName}
      onChange={e => {
        const newPerson = { ...selected, fullName: e.target.value };
        dispatch({ type: 'change', payload: newPerson });
      }}
    />
  </Form.Group>
);

export default PersonEditor;
