import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import FilterView from "./pages/FilterView";
import SavedJokesView from "./pages/SavedJokesView";


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<FilterView/>} />
        <Route path="/saved" element={<SavedJokesView/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
