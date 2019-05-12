import React from 'react';
import Form from 'react-bootstrap/Form';

const PersonEditor = ({ selected, people, setSelected, setPeople }) => (
  <Form.Group controlId="fullName">
    <Form.Label>Full name</Form.Label>
    <Form.Control
      type="text"
      value={selected.fullName}
      onChange={e => {
        const newPerson = { ...selected, fullName: e.target.value };
        setSelected(newPerson);
        setPeople(
          people.map(item => {
            if (item.id === newPerson.id) {
              return newPerson;
            }

            return item;
          })
        );
      }}
    />
  </Form.Group>
);

export default PersonEditor;
