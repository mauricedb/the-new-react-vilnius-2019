import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { url } from '../../shared/jokes-api';
import Loading from '../../shared/loading';
import { useFetch } from './useFetch';

const FetchWithCustomHooks = () => {
  const { loading, error, data: jokes } = useFetch(url);

  if (loading) {
    return <Loading />;
  }

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

export default FetchWithCustomHooks;
