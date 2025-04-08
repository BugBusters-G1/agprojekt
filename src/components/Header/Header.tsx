import LogoWithName from "../../assets/LogoWithName.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { motion, useAnimation } from "framer-motion";

export function Header() {
  const { isCardExpanded, resetUI } = useAppContext();
  const { resetJokes } = useJokesContext();
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({
      rotate: [0, 10, -10, 5, -5, 0],
      scale: [1, 1.1, 0.95, 1],
      transition: { duration: 0.6, ease: "easeInOut" }
    });
    resetUI();
    resetJokes();
  };

  return (
    <header
      onClick={handleClick}
      className={"app-header"}
      style={{
        backgroundColor: isCardExpanded ? "#fffcf7" : "transparent",
      }}
    >
      <Link to="/">
        <motion.img
          src={LogoWithName}
          alt="Lagom kul logotyp"
          className="app-header-logo"
          animate={controls}
        />
      </Link>
    </header>
  );
}
