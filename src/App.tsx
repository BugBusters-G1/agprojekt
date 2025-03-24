import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import FilterView from "./pages/FilterView";
import SavedJokesView from "./pages/SavedJokesView";
import { useJokes } from "./hooks/useJokes";

function App() {


  const { loading, error, currentJoke, getRandomJoke } = useJokes();


  return (
    <>

    
    <BrowserRouter>
      <Navbar onGenerateNewJoke= {getRandomJoke}/>
      <Routes>
        <Route path="/" element={
          <Home 
              loading={loading}
              currentJoke={currentJoke}
              error={error}
              getRandomJoke={getRandomJoke}/>}
           />
        <Route path="/filter" element={<FilterView/>} />
        <Route path="/saved" element={<SavedJokesView/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
