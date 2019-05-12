import React, { Suspense } from 'react';

import Loading from '../../shared/loading';
import FetchJokes from './fetch-jokes';

const JokesPage = () => (
  <Suspense fallback={<Loading />}>
    <FetchJokes />
  </Suspense>
);

export default JokesPage;
