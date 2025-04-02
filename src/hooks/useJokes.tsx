import { useState, useEffect } from "react";
import { Joke } from "../types/Joke";

const ENDPOINT_URI = "https://ordbanken-api.vercel.app/api/fetch_all";

export function useJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(ENDPOINT_URI)
      .then((res) => (res.ok ? res.json() : Promise.reject("Failed to fetch")))
      .then((data: Joke[]) => {
        setJokes(data);
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  const getRandomJoke = (selectedCategories: string[] = []): Joke | null => {
    if (!jokes.length) return null;

    const filteredJokes =
      selectedCategories.length > 0
        ? jokes.filter((joke) => selectedCategories.includes(joke.category))
        : jokes;

    const randomJoke =
      filteredJokes.length > 0
        ? filteredJokes[Math.floor(Math.random() * filteredJokes.length)]
        : null;

    return randomJoke;
  };

  return { jokes, error, loading, getRandomJoke };
}
