import { Card } from "./components/Card/Card";
import { ButtonComponent } from "./components/ButtomComponent";
import { useJokes } from "./hooks/useJokes";
import "./App.css"




const JokesList = () => {
  const { jokes, loading, currentJoke, getRandomJoke } = useJokes();

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner while waiting for data
  }

  return (
    <main>
      {currentJoke ? (
        <>
        <Card
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
  
    </main>                       //getRandomJoke kommer sedan kallas på via komponenten button som vi ska skapa
  );
};


export default JokesList;
