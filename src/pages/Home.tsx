import { Card } from "../components/Card/Card";

import "../App.css";
import { Joke } from "../types/Joke";


interface HomeProps {
  loading: boolean;
  currentJoke: Joke | null;
  getRandomJoke: () => void;
}

const Home = ({loading, currentJoke, getRandomJoke}: HomeProps) => {


  const renderContent = () => {
    if (loading) return <Skeleton count={3} />;
    if (error) return <p>{error}</p>;

    return currentJoke ? (
      <Card joke={currentJoke} onGenerateNewJoke={getRandomJoke} />
    ) : (
      <p>Inga skämt tillgängliga.</p>
    );
  };

  return <main>{renderContent()}</main>;
};

export default Home;
