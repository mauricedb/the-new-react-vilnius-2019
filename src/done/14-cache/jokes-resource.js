// import { unstable_createResource } from 'react-cache';
import { unstable_createResource } from './react-cache.development';

import { url } from '../../shared/jokes-api';

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

export default jokesResource;
