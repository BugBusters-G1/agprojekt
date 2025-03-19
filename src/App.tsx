
import { useEffect } from "react";
import { CardComponent } from "./components/CardComponent";
import { useJokes } from "./hooks/useJokes";



const JokesList = () => {
  const { jokes, loading, currentJoke, getRandomJoke } = useJokes();



  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner while waiting for data
  } 

  return (
    <main>
      {currentJoke ? (
        <CardComponent
          category={currentJoke.category}
          swedish={currentJoke.swedish}
          direct_translation={currentJoke.direct_translation}
          meaning={currentJoke.meaning}
        />
        
      ) : (
        <div>Inga skämt tillgängliga.</div>
      )}

      <button onClick={getRandomJoke}>Nästa skämt</button>    
    </main>                       //getRandomJoke kommer sedan kallas på via komponenten button som vi ska skapa
  );
};


export default JokesList;
