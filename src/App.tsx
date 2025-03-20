import { CardComponent } from "./components/CardComponent";
import { ButtonComponent } from "./components/ButtomComponent";
import { useJokes } from "./hooks/useJokes";




const JokesList = () => {
  const { jokes, loading, currentJoke, getRandomJoke } = useJokes();


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

      <button onClick={getRandomJoke}>Nästa skämt</button>    
    </main>                       //getRandomJoke kommer sedan kallas på via komponenten button som vi ska skapa
  );
};


export default JokesList;
