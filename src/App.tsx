import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { FilterContainer } from "./components/Filter/FilterContainer";
import "./App.css";
import { Header } from "./components/Header/Header";
import { JokesProvider } from "./context/JokeContext";
import { AppProvider, useAppContext } from "./context/AppContext";

function AppContent() {
  const { isFilterOpen, toggleFilter } = useAppContext();

  return (
    <>
      <Header />
      {isFilterOpen && <FilterContainer toggleFilter={toggleFilter} />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar />
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <JokesProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </JokesProvider>
    </AppProvider>
  );
}

export default App;
