import { useState, useEffect } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchNow(url) {
    setLoading(true);
    try {
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  }

  return [data, error, loading, fetchNow];
}
