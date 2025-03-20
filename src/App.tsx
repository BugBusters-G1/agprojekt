
import { useEffect, useState } from "react";
import { CardComponent } from "./components/CardComponent";
import { ButtonComponent } from "./components/ButtomComponent";
import { useJokes } from "./hooks/useJokes";
import { Joke } from "./types/Joke";


const JokesList = () => {
  const { jokes, loading } = useJokes();
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);

  useEffect(() => {
    if (jokes.length > 0) {
      setCurrentJoke(jokes[0]);
    }
  }, [jokes]);

  const getRandomJoke = () => {
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setCurrentJoke(jokes[randomIndex]);
    }
  };


  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner while waiting for data
  } 

  return (
    <main>
      {currentJoke ? (
        <>
        <CardComponent
          category={currentJoke.category}
          swedish={currentJoke.swedish}
          direct_translation={currentJoke.direct_translation}
          meaning={currentJoke.meaning}
        />
    
               <ButtonComponent onClick={getRandomJoke} />
               </>
      ) : (
        <div>Inga skämt tillgängliga.</div>
      )}
    </main>
  );
};


export default JokesList;
