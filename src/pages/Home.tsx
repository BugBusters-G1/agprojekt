import { Card } from "../components/Card/Card";
import "../App.css";
import { Joke } from "../types/Joke";

interface HomeProps {
  loading: boolean;
  currentJoke: Joke | null;
  getRandomJoke: () => void;
}

const Home = ({loading, currentJoke, getRandomJoke}: HomeProps) => {

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

export default Home;
