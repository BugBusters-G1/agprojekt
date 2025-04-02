import { Card } from "../components/Card/Card";
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
  const { jokes, loading, error, removeTopJoke, jokeQueue, setJokeQueue } =
    useJokesContext();
  const { isCardExpanded } = useAppContext();

  useEffect(() => {
    if (jokes && jokes.length > 0) {
      setJokeQueue((prevQueue) => {
        // Get the remaining joke IDs (last 2 jokes in queue)
        const remainingIds = prevQueue.slice(-2).map((j) => j._id);

        // Filter jokes to exclude ones already in remaining cards
        const filteredJokes = jokes.filter(
          (j) => !remainingIds.includes(j._id)
        );

        // Shuffle and pick up to 5 new unique jokes
        const newJokes = shuffleArray(filteredJokes).slice(0, 5);

        return newJokes;
      });
    }
  }, [jokes]);

  const handleDrag = (_: any, info: { offset: { x: number; y: number } }) => {
    if (Math.abs(info.offset.x) > 100) {
      removeTopJoke();
    }
  };

  return (
    <main className="pt-40 pb-40 flex items-start justify-center h-auto w-screen">
      {loading ? (
        <Skeleton count={3} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid place-items-center w-full h-auto">
          {jokeQueue.slice(0, 2).map((joke, mIndex) => (
            <motion.div
              key={joke._id + mIndex} //gör key lite mer unikt pga dubletter vid shuffle
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
