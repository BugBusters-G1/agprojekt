import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { Header } from "./components/Header/Header";
import { JokesProvider } from "./context/JokeContext";
import { AppProvider } from "./context/AppContext";
import Popup from "./components/Popup/Popup";

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Popup />
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
