import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { url } from '../../shared/jokes-api';
import Loading from '../../shared/loading';

class FetchJokes extends Component {
  state = { jokes: null, error: null, loading: true };

  async componentDidMount() {
    try {
      const rsp = await fetch(url);
      if (rsp.ok) {
        const data = await rsp.json();
        this.setState({ jokes: data.value, loading: false });
      } else {
        throw new Error(rsp.statusText);
      }
    } catch (e) {
      this.setState({ error: e, loading: false });
    }
  }

  render() {
    const { loading, error, jokes } = this.state;

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
  }
}

export default FetchJokes;
