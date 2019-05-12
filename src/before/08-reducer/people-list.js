import React from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';

const PeopleList = ({ people, selected, setSelected }) => (
  <ListGroup variant="flush">
    {people.map(item => (
      <ListGroup.Item
        key={item.id}
        className={classNames({ active: item === selected })}
        onClick={() => setSelected(item)}
      >
        {item.fullName}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default PeopleList;
