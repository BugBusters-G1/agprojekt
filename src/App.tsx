import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
=======

    <main>
      {currentJoke ? (
        <>
          <Card joke={currentJoke} onGenerateNewJoke={getRandomJoke} />
        </>
      ) : (
        <div>Inga skämt tillgängliga.</div>
      )}
    </main> //getRandomJoke kommer sedan kallas på via komponenten button som vi ska skapa

  
>>>>>>> 3f9f466 (Add: Header component and Hamburger component files)
  );
}

export default App;
