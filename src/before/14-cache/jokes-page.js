import React, { Suspense } from 'react';
import FetchJokes from './fetch-jokes';
import Loading from '../../shared/loading';

const JokesPage = () => (
  <Suspense fallback={<Loading />}>
    <FetchJokes />
  </Suspense>
);

export default JokesPage;
