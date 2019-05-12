import React, { useMemo } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Loading from '../../shared/loading';
import { useFetch } from './useFetch';

const FetchWithCustomHooks = () => {
  const { loading, error, data: jokes } = useFetch(
    'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript',
    useMemo(() => ({ headers: { accept: 'application/json' } }), [])
  );

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
