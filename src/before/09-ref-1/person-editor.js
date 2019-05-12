import React from 'react';
import Form from 'react-bootstrap/Form';

const PersonEditor = ({ selected, dispatch }) => {
  return (
    <Form>
      <Form.Group controlId="firstName">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          type="text"
          value={selected.firstName}
          onChange={e =>
            dispatch({
              type: 'change',
              payload: {
                id: selected.id,
                name: 'firstName',
                value: e.target.value
              }
            })
          }
        />
      </Form.Group>
      <Form.Group controlId="pastName">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          value={selected.lastName}
          onChange={e =>
            dispatch({
              type: 'change',
              payload: {
                id: selected.id,
                name: 'lastName',
                value: e.target.value
              }
            })
          }
        />
      </Form.Group>
    </Form>
  );
};

export default PersonEditor;
