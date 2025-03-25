import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { useJokes } from "./hooks/useJokes";
import { useToggle } from "./hooks/useToggle";
import { Filter } from "./components/Filter/Filter";
import "./App.css";
import { Header } from "./components/Header/Header";


function App() {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();
  const { isOpen: isFilterOpen, toggle: toggleFilter } = useToggle();
  const { isOpen: isExpanded, toggle: toggleExpand } = useToggle();

  return (
    <BrowserRouter>

      <Header/>

      {isFilterOpen && <Filter toggleFilter={toggleFilter} />}

      <Navbar
        filterToggle={toggleFilter}
        isFilterOpen={isFilterOpen}
        onGenerateNewJoke={getRandomJoke}
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
              getRandomJoke={getRandomJoke}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
