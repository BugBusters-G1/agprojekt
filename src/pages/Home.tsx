import { Card } from "../components/Card/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import { SwipeCard } from "../components/Card/SwipeCard";
import { Navbar } from "../components/Navbar/Navbar";
import { FilterContainer } from "../components/CategorySelector/CategorySelector";

const Home = () => {
  const {
    loading,
    error,
    jokes,
    jokeQueue,
    setJokeQueue,
    selectedCategories,
    getUniqueRandomJoke,
  } = useJokesContext();
  const { isCardExpanded, toggleCategorySelector, isCategorySelector } =
    useAppContext();

  useEffect(() => {
    const jokesToUse =
      selectedCategories.length > 0
        ? jokes.filter((joke) =>
            selectedCategories.some((category) =>
              joke.category.includes(category)
            )
          )
        : jokes;

    const shuffledJokes = [...jokesToUse].sort(() => Math.random() - 0.5);
    const randomJokes = shuffledJokes.slice(0, 2);

    setJokeQueue(randomJokes);
  }, [selectedCategories, jokes]);

  useEffect(() => {
    if (jokeQueue.length < 2) {
      const newJoke = getUniqueRandomJoke(selectedCategories);
      if (newJoke) {
        setJokeQueue((prev) => [newJoke, ...prev]);
      }
    }
  }, [jokeQueue, getUniqueRandomJoke, selectedCategories]);

  return (
    <main
      className={`w-screen h-auto flex flex-col ${
        isCardExpanded ? "h-auto" : "h-screen"
      }`}
    >
      {loading ? (
        <Skeleton count={1} height={100} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="h-full flex flex-col justify-center">
          <div className="grid place-items-center w-full h-auto">
            {isCategorySelector ? (
              <FilterContainer toggleFilter={toggleCategorySelector} />
            ) : (
              jokeQueue.map((joke, index) => (
                <SwipeCard
                  key={`${joke._id}-${index}`}
                  id={joke._id}
                  queue={jokeQueue}
                >
                  <Card
                    key={`${joke._id}-${index}`}
                    joke={joke}
                    expanded={index === jokeQueue.length - 1 && isCardExpanded}
                    index={index}
                  />
                </SwipeCard>
              ))
            )}
          </div>
        </div>
      )}
      <Navbar />
    </main>
  );
};

export default Home;
