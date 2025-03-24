import { Link } from "react-router-dom";

export interface NavItemProps {
  label: string;
  type: "link" | "button";
  to?: string;
  onClick?: () => void;
}

export function NavItem({ label, type, to, onClick, icon }: NavItemProps) {
  return type === "link" ? (
    <Link to={to!} className="nav-link">
      {label}
    </Link>
  ) : (
    <button onClick={onClick} className="nav-button">
      {label}
    </button>
  );
}
