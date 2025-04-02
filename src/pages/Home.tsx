import { Card } from "../components/Card/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";
import { useAppContext } from "../context/AppContext";
import { Joke } from "../types/Joke";
import { useEffect, useState } from "react";
import { SwipeCard } from "../components/Card/SwipeCard";

const shuffleArray = (array: Joke[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Home = () => {
  const {
    jokes,
    loading,
    error,
    jokeQueue,
    setJokeQueue,
    selectedCategories,
    getRandomJoke,
  } = useJokesContext();
  const { isCardExpanded, toggleCardExpand } = useAppContext();

  useEffect(() => {
    if (jokeQueue.length < 2) {
      const newJoke = getRandomJoke(selectedCategories);
      if (newJoke) {
        setJokeQueue((prev) => [newJoke, ...prev]);
      }
    }
  }, [jokeQueue, getRandomJoke, selectedCategories, setJokeQueue]);

  return (
    <main
      className="py-30
 flex items-start justify-center min-h-screen h-auto w-screen"
    >
      {loading ? (
        <Skeleton count={3} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid place-items-center w-full h-auto">
          {jokeQueue.map((joke, index, arr) => (
            <SwipeCard key={joke._id} index={index}>
              <Card
                key={joke._id + index}
                joke={joke}
                expanded={index === arr.length - 1 && isCardExpanded}
                index={index}
              />
            </SwipeCard>
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
