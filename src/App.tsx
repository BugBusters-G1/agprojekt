import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { useJokes } from "./hooks/useJokes";
import { useToggle } from "./hooks/useToggle";
import { Filter } from "./components/Filter/Filter";
import "./App.css";
import { Header } from "./components/Header/Header";

import { useCategories } from "./hooks/useCategories";
import { categoryColors, categoryStyles } from "./utils/Colors";
function App() {
  const { jokes, loading, error, currentJoke, getRandomJoke } = useJokes();
  const {
    categories,
    error: categoryError,
    loading: categoryLoading,
  } = useCategories();
  const { isOpen: isFilterOpen, toggle: toggleFilter } = useToggle();
  const {
    isOpen: isExpanded,
    toggle: toggleExpand,
    setIsOpen: setExpanded,
  } = useToggle();

  const handleNewJoke = () => {
    setExpanded(false);
    getRandomJoke();
  };

  return (
    <BrowserRouter>
      <Header />
      {isFilterOpen && (
        <Filter
          availableCategories={categories}
          toggleFilter={toggleFilter}
          loading={categoryLoading}
          error={categoryError}
          colors={categoryColors}
        />
      )}

      <Navbar
        filterToggle={toggleFilter}
        isFilterOpen={isFilterOpen}
        onGenerateNewJoke={handleNewJoke}
        toggleExpand={toggleExpand}
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
