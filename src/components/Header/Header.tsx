import LogoWithName from "../../assets/LogoWithName.png";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "./Header.css";
export function Header() {
  const { isCardExpanded, resetUI } = useAppContext();
  const { resetJokes } = useJokesContext();
  const controls = useAnimation();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleClick = async () => {
    await controls.start({
      rotate: [0, 10, -10, 5, -5, 0],
      scale: [1, 1.1, 0.95, 1],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    resetUI();
    resetJokes();
  };

  if (isDesktop) return null;

  return (
    <header
      className="app-header"
      onClick={handleClick}
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
