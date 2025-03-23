import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import FilterView from "./pages/FilterView";
import SavedJokesView from "./pages/SavedJokesView";


function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
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
