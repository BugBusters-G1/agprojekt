import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Filter } from "./components/Filter/Filter";
import { useState } from "react";
import { useJokes } from "./hooks/useJokes";
import { useState } from "react";

function App() {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();
  const [isFilterMenu, setFilterMenu] = useState<boolean>(false);

  const toggleFilterMenu = () => {
    setFilterMenu((prev) => !prev);
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    
    <BrowserRouter>
    {isFilterMenu && <Filter toggleFilter={toggleFilterMenu} />}

      <Navbar filterToggle={toggleFilterMenu} onGenerateNewJoke= {getRandomJoke} onToggleExpand={toggleExpand}/>
      <Routes>
        <Route path="/" element={
          <Home 
              loading={loading}
              currentJoke={currentJoke}
              error={error}
              _expanded={expanded}
              getRandomJoke={getRandomJoke}/>}
           />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
