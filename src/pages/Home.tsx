import { Card } from "../components/Card/Card";
import { useJokes } from "../hooks/useJokes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../App.css";

const Home = () => {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();

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
