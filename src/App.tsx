import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { useJokes } from "./hooks/useJokes";
import { useToggle } from "./hooks/useToggle";
import { FilterContainer } from "./components/Filter/FilterContainer";
import "./App.css";
import { Header } from "./components/Header/Header";
import { useCopyJoke } from "./hooks/useCopyJoke";

import { useCategories } from "./hooks/useCategories";
import { categoryColors } from "./utils/Colors";
import { useEffect, useState } from "react";
function App() {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();
  const {
    categories,
    error: categoryError,
    loading: categoryLoading,
  } = useCategories();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { isOpen: isFilterOpen, toggle: toggleFilter } = useToggle();

  const { copyJokeToClipboard } = useCopyJoke();

  const {
    isOpen: isExpanded,
    toggle: toggleExpand,
    setIsOpen: setExpanded,
  } = useToggle();

  const updateSelectedCategories = (category: string) => {
    console.log(category);
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  useEffect(() => {
    if (isFilterOpen && isExpanded) {
      setExpanded(false);
    }
  }, [isFilterOpen, isExpanded]);

  const handleNewJoke = () => {
    setExpanded(false);
    getRandomJoke(selectedCategories);
  };

  return (
    <BrowserRouter>
      <Header />
      {isFilterOpen && (
        <FilterContainer
          onGenerateNewJoke={handleNewJoke}
          toggleFilter={toggleFilter}
          availableCategories={categories}
          loading={categoryLoading}
          error={categoryError}
          colors={categoryColors}
          selectedCategories={selectedCategories}
          updateSelectedCategories={updateSelectedCategories}
        />
      )}

      <Navbar
        filterToggle={toggleFilter}
        isFilterOpen={isFilterOpen}
        onGenerateNewJoke={handleNewJoke}
        toggleExpand={toggleExpand}
        onCopyJoke={() => {
          if (currentJoke) {
            copyJokeToClipboard(currentJoke, isExpanded);
          }
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              currentJoke={currentJoke}
              error={error}
              _expanded={isExpanded}
              getRandomJoke={handleNewJoke}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
