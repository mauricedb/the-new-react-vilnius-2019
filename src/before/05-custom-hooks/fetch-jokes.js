import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Loading from '../../shared/loading';

const FetchWithCustomHooks = () => {
  const [state, setState] = useState({
    jokes: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const rsp = await fetch(
          'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript'
        );
        if (rsp.ok) {
          const data = await rsp.json();
          setState({ jokes: data.value, error: null, loading: false });
        } else {
          throw new Error(rsp.statusText);
        }
      } catch (e) {
        setState({ jokes: null, error: e, loading: false });
      }
    }

    fetchData();
  }, []);

  const { loading, error, jokes } = state;

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
