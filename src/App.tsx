import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { useToggle } from "./hooks/useToggle";
import { FilterContainer } from "./components/Filter/FilterContainer";
import "./App.css";
import { Header } from "./components/Header/Header";

import { useEffect, useState } from "react";
import { JokesProvider } from "./context/JokeContext";
function App() {
  const { isOpen: isFilterOpen, toggle: toggleFilter } = useToggle();

  const {
    isOpen: isExpanded,
    toggle: toggleExpand,
    setIsOpen: setExpanded,
  } = useToggle();

  useEffect(() => {
    if (isFilterOpen && isExpanded) {
      setExpanded(false);
    }
  }, [isFilterOpen, isExpanded]);

  //   const handleNewJoke = () => {
  //     setExpanded(false);
  //     getRandomJoke(selectedCategories);
  //   };

  return (
    <JokesProvider>
      <BrowserRouter>
        <Header />
        {isFilterOpen && <FilterContainer toggleFilter={toggleFilter} />}

        <Navbar
          filterToggle={toggleFilter}
          isFilterOpen={isFilterOpen}
          toggleExpand={toggleExpand}
        />
        <Routes>
          <Route path="/" element={<Home _expanded={isExpanded} />} />
        </Routes>
      </BrowserRouter>
    </JokesProvider>
  );
}

export default App;
