import { Link } from "react-router-dom";
import { useIcon } from "../../hooks/useIcon";
import "./Navbar.css";
export interface NavItemProps {
  type: "link" | "button";
  to?: string;
  onClick?: () => void;
  icon?: string;
}

export function NavItem({ type, to, onClick, icon }: NavItemProps) {
  const _icon = icon ? useIcon(icon) : null;

  return type === "link" ? (
    <Link to={to!} className="nav-item">
      {_icon && <_icon />}
    </Link>
  ) : (
    <button onClick={onClick} className="nav-item">
      {_icon && <_icon />}
    </button>
  );
}
