import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Filter } from "./components/Filter/Filter";
import { useState } from "react";
import { useJokes } from "./hooks/useJokes";

function App() {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();
  const [isFilterMenu, setFilterMenu] = useState<boolean>(false);

  const toggleFilterMenu = () => {
    setFilterMenu((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          onGenerateNewJoke={getRandomJoke}
          filterToggle={toggleFilterMenu}
        />

        {isFilterMenu && <Filter toggleFilter={toggleFilterMenu} />}

        <Routes>
          <Route
            path="/"
            element={
              <Home
                loading={loading}
                currentJoke={currentJoke}
                error={error}
                getRandomJoke={getRandomJoke}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
