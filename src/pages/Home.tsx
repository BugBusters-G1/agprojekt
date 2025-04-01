import { Card } from "../components/Card/Card";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";
import { useAppContext } from "../context/AppContext";
import { Joke } from "../types/Joke";
import { useEffect, useState } from "react";

const Home = () => {
  const { jokes, loading, error, getRandomJoke,selectedCategories } = useJokesContext();
  const { isCardExpanded } = useAppContext();
  const [jokeHistory, setJokeHistory] = useState<Joke>();
  const [jokeQueue, setJokeQueue] = useState<Joke[] | null >([]);

  const handleDrag = (_: any, info: { offset: { x: number; y: number } }) => {
    if (!jokeQueue || jokeQueue.length === 0) return;
    

    if (info.offset.x > 100) {
      const newJoke = getRandomJoke(selectedCategories)

      if (!newJoke) return; 

      setJokeQueue((prevJokes) =>
        prevJokes ? [...prevJokes.slice(1), newJoke] : [newJoke]
      );
      
    }
  };

  useEffect(() => {
    if (jokes && jokes.length >= 3) {
      setJokeQueue(jokes.slice(0, 3));
    }
  }, [jokes]);

  const renderContent = () => {
    if (loading) return <Skeleton count={3} />;
    if (error) return <p>{error}</p>;

    return (
      <div className="card-stack-grid">
        {jokeQueue?.slice(0).reverse().map((joke, index) => (
        <Card key={index} joke={joke} expanded={isCardExpanded} handleDrag={handleDrag}/>
    
       ))}
      </div>

    )



  };

  return (
    <main style={{ marginBottom: isCardExpanded ? "15vh" : "0" }}>
      {renderContent()}
    </main>
  );
};

export default Home;
