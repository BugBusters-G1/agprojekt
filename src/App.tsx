import { Card } from "./components/Card/Card";
import { useJokes } from "./hooks/useJokes";
import "./App.css";

const JokesList = () => {
  const { loading, currentJoke, getRandomJoke } = useJokes();

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner while waiting for data
  }

  return (

    <main>
      {currentJoke ? (
        <>
          <Card joke={currentJoke} onGenerateNewJoke={getRandomJoke} />
        </>
      ) : (
        <div>Inga skämt tillgängliga.</div>
      )}
    </main> //getRandomJoke kommer sedan kallas på via komponenten button som vi ska skapa

  
  );
};

export default JokesList;
