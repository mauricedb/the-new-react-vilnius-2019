import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import jokesResource from './jokes-resource';

const FetchJokes = () => {
  const { error, jokes } = jokesResource.read();

  if (error) {
    return <div>{error && error.message}</div>;
  }
  return (
    <ListGroup>
      {jokes.map(item => (
        <ListGroup.Item key={item.id}>{item.joke}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default FetchJokes;
