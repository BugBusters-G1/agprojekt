import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { FilterContainer } from "./components/CategorySelector/CategorySelector";
import "./App.css";
import { Header } from "./components/Header/Header";
import { JokesProvider } from "./context/JokeContext";
import { AppProvider, useAppContext } from "./context/AppContext";

function AppContent() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
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
