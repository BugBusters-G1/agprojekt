import { Card } from "../components/Card/Card";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";

interface HomeProps {
  _expanded: boolean;
}

const Home = ({ _expanded }: HomeProps) => {
  const { currentJoke, loading, error } = useJokesContext();
  const renderContent = () => {
    if (loading) return <Skeleton count={3} />;
    if (error) return <p>{error}</p>;

    return currentJoke ? (
      <Card joke={currentJoke} expanded={_expanded} />
    ) : (
      <p>Inga skämt tillgängliga.</p>
    );
  };

  return (
    <main style={{ marginBottom: _expanded ? "15vh" : "0" }}>
      {renderContent()}
    </main>
  );
};

export default Home;
