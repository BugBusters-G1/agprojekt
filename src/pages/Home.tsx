import { Card } from "../components/Card/Card";
import "../App.css";
import { Joke } from "../types/Joke";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface HomeProps {
  loading: boolean;
  currentJoke: Joke | null;
  getRandomJoke: () => void;
  error: string | null;
  _expanded: boolean;
}

const Home = ({ loading, currentJoke, error, _expanded }: HomeProps) => {
  const renderContent = () => {
    if (loading) return <Skeleton count={3} />;
    if (error) return <p>{error}</p>;

    return currentJoke ? (
      <Card joke={currentJoke} expanded={_expanded} />
    ) : (
      <p>Inga skämt tillgängliga.</p>
    );
  };

  return <main>{renderContent()}</main>;
};

export default Home;
