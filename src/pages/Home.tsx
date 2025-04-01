import { Card } from "../components/Card/Card";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";
import { useAppContext } from "../context/AppContext";
import { Joke } from "../types/Joke";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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


        <motion.div
          key={index}
          drag={index === 0 ? "x" : false}
          onDragEnd={index === 0 ? handleDrag : undefined}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ scale: 1 - index * 0.03, y: index * 8 }}
          exit={{ x: 500, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{

            gridRow: 1,
            gridColumn: 1,
            width: "100%",
            zIndex: jokeQueue.length - index,
          }}
        >
          <Card joke={joke} expanded={isCardExpanded} />
        </motion.div>
    
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
