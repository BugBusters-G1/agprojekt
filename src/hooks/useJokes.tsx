import { useState, useEffect } from "react";
import { Joke } from "../types/Joke";

export function useJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(
          "https://ordbanken-api.vercel.app/api/fetch_all"
        );
        const jokes_data: Joke[] = await response.json();
        setJokes(jokes_data);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched (or error occurred)
      }
    };

    fetchJokes();
  }, []);

  return { jokes, loading }; // Return both jokes and loading state
}
