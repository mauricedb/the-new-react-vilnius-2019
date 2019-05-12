import { useState, useEffect } from 'react';

export function useFetch(url, init = null) {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const rsp = await fetch(url, init);
        if (rsp.ok) {
          const data = await rsp.json();
          setState({ data: data.value, error: null, loading: false });
        } else {
          throw new Error(rsp.statusText);
        }
      } catch (e) {
        setState({ data: null, error: e, loading: false });
      }
    }

    fetchData();
  }, [url, init]);

  return state;
}
