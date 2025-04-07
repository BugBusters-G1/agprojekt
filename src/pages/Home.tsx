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
  const { loading, error, jokes, jokeQueue, setJokeQueue, selectedCategories, getUniqueRandomJoke } =
    useJokesContext();
  const { isCardExpanded, toggleCategorySelector, isCategorySelector } =
    useAppContext();

  useEffect(() => {
    // If no categories are selected, default to all jokes
    const jokesToUse =
      selectedCategories.length > 0
        ? jokes.filter((joke) =>
            selectedCategories.some((category) =>
              joke.category.includes(category)
            )
          )
        : jokes; // Use all jokes if no categories are selected

    // Shuffle the jokes and take the first two
    const shuffledJokes = [...jokesToUse].sort(() => Math.random() - 0.5);
    const randomJokes = shuffledJokes.slice(0, 2);

    // Update the joke queue with the new jokes
    setJokeQueue(randomJokes);
  }, [selectedCategories, jokes]); // Re-run the effect when `selectedCategories` or `jokes` change

  //Keeping jokequeue from running out
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
      className={`w-screen min-h-screen pt-30 flex flex-col justify-between ${
        isCardExpanded ? "h-auto gap-3" : "h-full"
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
