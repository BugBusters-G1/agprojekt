import { Card } from "../components/Card/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useJokesContext } from "../context/JokeContext";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import { SwipeCard } from "../components/Card/SwipeCard";
import { Navbar } from "../components/Navbar/Navbar";
import { FilterContainer } from "../components/CategorySelector/CategorySelector";
import { DesktopNavbar } from "../components/Navbar/DesktopNavbar";
import { useMediaQuery } from "react-responsive";

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
  const {
    isCardExpanded,
    toggleCategorySelector,
    isCategorySelector,
    isDesktopNavbarExpand,
  } = useAppContext();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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
      className={`w-screen min-h-screen flex  flex-row justify-start ${
        isDesktop ? "pt-0 flex-row" : "pt-30 flex-col"
      }  items-start`}
      style={{ backgroundColor: "#fffcf7" }}
    >
      {isDesktop && <DesktopNavbar />}
      {isDesktop && isDesktopNavbarExpand && (
        <span
          className="absolute  w-screen h-screen"
          style={{
            background: isDesktopNavbarExpand ? "black" : "transparent",
            opacity: isDesktopNavbarExpand ? "0.6" : "0",
            zIndex: isDesktopNavbarExpand ? 900 : 0,
          }}
        ></span>
      )}

      <div
        className="flex flex-col w-screen h-full gap-10 items-center"
        style={{}}
      >
        {" "}
        {loading ? (
          <Skeleton count={1} height={100} />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid items-start justify-items-center w-full h-auto pt-8 lg:pt-16">
            {isCategorySelector && !isDesktop ? (
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
        )}
        <div className="w-60">
          <Navbar />
        </div>
      </div>
    </main>
  );
};

export default Home;
