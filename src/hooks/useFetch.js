import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResults(json);
        setLoading(false);
      } catch (error) {
        seterror(error);
        setLoading(false);
      }
    })();
  }, [url, options]);

  return { loading, results, error };
}
