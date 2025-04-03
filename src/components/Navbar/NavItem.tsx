import { Link } from "react-router-dom";
import { useIcon } from "../../hooks/useIcon";
import "./Navbar.css";
// Import the BURGER.svg f7rom the assets folder
import kiugikg from "../../assets/BURGER.svg";

export interface NavItemProps {
  type: "link" | "button";
  to?: string;
  onClick?: () => void;
  icon?: string;
}

export function NavItem({ type, to, onClick, icon }: NavItemProps) {
  const _icon = icon ? useIcon(icon) : null;

  return type === "link" ? (
    <Link to={to!} className="nav-item"></Link>
  ) : (
    <button onClick={onClick} className="nav-item">
      {/* Use the imported burgerIcon SVG here */}
      <img src={kiugikg} alt="Burger Icon" />
    </button>
  );
}
