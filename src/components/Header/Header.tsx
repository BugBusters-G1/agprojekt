import LogoWithName from "../../assets/LogoWithName.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";

export function Header() {
  const { isCardExpanded, resetUI } = useAppContext();
  const { resetJokes } = useJokesContext();


  const resetApp = () => {
    resetUI();
    resetJokes();
  }

  return (
    <header
      onClick={resetApp}
      className={"app-header"}
      style={{
        backgroundColor: isCardExpanded ? "#fffcf7" : "transparent",
      }}
    >
      <Link to="/">
        <img
          src={LogoWithName}
          alt="Lagom kul logotyp"
          className="app-header-logo"
        />
      </Link>
    </header>
  );
}
