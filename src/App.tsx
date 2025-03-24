import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { useJokes } from "./hooks/useJokes";
import { Filter } from "./components/Filter/Filter";
import { useState } from "react";

function App() {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();
  const [isFilterMenu, setFilterMenu] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <Navbar onGenerateNewJoke={getRandomJoke} />

        {isFilterMenu && <Filter />}

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
