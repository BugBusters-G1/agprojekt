import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Filter } from "./components/Filter/Filter";

function App() {
  return (
    <>
      <BrowserRouter>

      <Navbar />
      <Filter/>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
