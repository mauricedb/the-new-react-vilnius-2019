import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { url } from '../../shared/jokes-api';

import { unstable_createResource } from './react-cache.development';

const jokesResource = unstable_createResource(async () => {
  try {
    const rsp = await fetch(url);
    if (rsp.ok) {
      const data = await rsp.json();
      return { jokes: data.value, error: null };
    } else {
      throw new Error(rsp.statusText);
    }
  } catch (e) {
    return { jokes: null, error: e };
  }
});

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
