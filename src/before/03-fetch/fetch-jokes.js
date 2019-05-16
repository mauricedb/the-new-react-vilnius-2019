import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { url } from '../../shared/jokes-api';
import Loading from '../../shared/loading';

const FetchJokes = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    jokes: null
  });

  const { loading, error, jokes } = state;

  useEffect(() => {
    async function getJokes() {
      try {
        const rsp = await fetch(url);
        if (rsp.ok) {
          const data = await rsp.json();
          setState({ jokes: data.value, loading: false, error });
        } else {
          throw new Error(rsp.statusText);
        }
      } catch (e) {
        setState({ error: e, loading: false, jokes });
      }
    }
    getJokes();
  }, [error, jokes]);

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

export default FetchJokes;
