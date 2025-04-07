import LogoWithName from "../../assets/LogoWithName.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAppContext } from "../../context/AppContext";

export function Header() {
  const { isCardExpanded } = useAppContext();
  return (
    <header
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
