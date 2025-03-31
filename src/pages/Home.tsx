import { Card } from "../components/Card/Card";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { currentJoke, loading, error } = useJokesContext();
  const { isCardExpanded } = useAppContext();
  const renderContent = () => {
    if (loading) return <Skeleton count={3} />;
    if (error) return <p>{error}</p>;

    return currentJoke ? (
      <Card joke={currentJoke} expanded={isCardExpanded} />
    ) : (
      <p>Inga skämt tillgängliga.</p>
    );
  };

  return (
    <main style={{ marginBottom: isCardExpanded ? "15vh" : "0" }}>
      {renderContent()}
    </main>
  );
};

export default Home;
