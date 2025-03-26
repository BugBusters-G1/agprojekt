import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { useJokes } from "./hooks/useJokes";
import { useToggle } from "./hooks/useToggle";
import { Filter } from "./components/Filter/Filter";
import "./App.css";
import { Header } from "./components/Header/Header";
import { useCopyJoke } from "./hooks/useCopyJoke";


function App() {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();
  const { isOpen: isFilterOpen, toggle: toggleFilter } = useToggle();
  const { isOpen: isExpanded, toggle: toggleExpand, setIsOpen: setExpanded } = useToggle();
  const {copyJokeToClipboard, copied} = useCopyJoke()
  
  const handleNewJoke = () => {
    setExpanded(false);
    getRandomJoke(); 
  };
  
  return (
    <BrowserRouter>

      <Header/>

      {isFilterOpen && <Filter toggleFilter={toggleFilter} />}

      <Navbar
        filterToggle={toggleFilter}
        isFilterOpen={isFilterOpen}
        onGenerateNewJoke={handleNewJoke} 
        toggleExpand={toggleExpand}
        onCopyJoke={()=> {
          if (currentJoke) {
            copyJokeToClipboard(currentJoke, isExpanded)
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
