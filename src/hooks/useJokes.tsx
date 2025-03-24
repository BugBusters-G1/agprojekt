import { useState, useEffect } from "react";

const ENDPOINT_URI = "https://ordbanken-api.vercel.app/api/fetch_all";

export function useJokes() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentJoke, setCurrentJoke] = useState(null);

  useEffect(() => {
    fetch(ENDPOINT_URI)
      .then((res) => (res.ok ? res.json() : Promise.reject("Failed to fetch")))
      .then((data) => {
        setJokes(data);
        setCurrentJoke(data[Math.floor(Math.random() * data.length)]);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const getRandomJoke = () =>
    jokes.length &&
    setCurrentJoke(jokes[Math.floor(Math.random() * jokes.length)]);

  return { jokes, error, loading, currentJoke, getRandomJoke };
}
