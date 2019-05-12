import React from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';

const PeopleList = ({ people, selected, dispatch }) => (
  <div className="list-group list-group-flush">
    {people.map(item => (
      <ListGroup.Item
        key={item.id}
        className={classNames({ active: item === selected })}
        onClick={() => dispatch({ type: 'select', payload: item })}
      >
        {item.fullName}
      </ListGroup.Item>
    ))}
  </div>
);

export default PeopleList;
