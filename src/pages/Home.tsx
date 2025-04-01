import { Card } from "../components/Card/Card";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";
import { useAppContext } from "../context/AppContext";
import { Joke } from "../types/Joke";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const shuffleArray = (array: Joke[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Home = () => {
  const { jokes, loading, error, getRandomJoke, selectedCategories } =
    useJokesContext();
  const { isCardExpanded } = useAppContext();
  const [jokeQueue, setJokeQueue] = useState<Joke[]>([]);

  useEffect(() => {
    if (jokes && jokes.length > 0) {
      const shuffledJokes = shuffleArray(jokes).slice(0, 5);
      setJokeQueue(shuffledJokes);
    }
  }, [jokes]);

  const handleDrag = (_: any, info: { offset: { x: number; y: number } }) => {
    if (!jokeQueue || jokeQueue.length === 0) return;

    if (Math.abs(info.offset.x) > 100) {
      //Om drag offset på x axel är över 100 eller under -100(swipe track, höger vänster)
      setJokeQueue((prevQueue) => {
        const newQueue = prevQueue.slice(1); //Klipper bort skämtet längst fram

        if (newQueue.length < 2) {
          //Om kön är under 2 element
          const newJokes = Array.from({ length: 5 }, () =>
            //Skapa 5 nya skämt
            getRandomJoke(selectedCategories)
          ).filter(Boolean) as Joke[];
          return [...newQueue, ...newJokes]; //returnera 5 nya skämt + 2
        }

        return newQueue;
      });
    }
  };

  return (
    <main style={{ marginBottom: isCardExpanded ? "15vh" : "0" }}>
      {loading ? (
        <Skeleton count={3} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="card-stack-grid">
          {jokeQueue.slice(0, 5).map((joke, mIndex) => (
            <motion.div
              key={joke._id}
              drag="x"
              onDragEnd={handleDrag}
              dragConstraints={{ left: 0, right: 0 }}
              style={{
                gridRow: 1,
                gridColumn: 1,
                zIndex: jokeQueue.length - mIndex,
              }}
            >
              <Card joke={joke} expanded={isCardExpanded} index={mIndex} />
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
