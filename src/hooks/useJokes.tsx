import { useState, useEffect } from "react";
import { Joke } from "../types/Joke";

export function useJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);


  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(
          "https://ordbanken-api.vercel.app/api/fetch_all"
        );
        const jokes_data: Joke[] = await response.json();
        setJokes(jokes_data);


        if (jokes_data.length > 0){   //Sätter med detta ett random skämt direkt när skämten hämtats
          setCurrentJoke(jokes_data[Math.floor(Math.random()*jokes_data.length)])
        }


      } catch (error) {
        console.error("Error fetching jokes:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched (or error occurred)
      }
    };

    fetchJokes();
  }, []);

  const getRandomJoke = () => {     //Funktionen som generear random skämt ligger här istället
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length)
      setCurrentJoke(jokes[randomIndex])
    }

  }

  return { jokes, loading, currentJoke, getRandomJoke }; // Return both jokes and loading state
}
