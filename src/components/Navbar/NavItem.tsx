import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface NavItemProps {
  type: "link" | "button";
  to?: string;
  onClick?: () => void;
  icon?: string;
  imgSrc?: string | ReactNode;
}

export function NavItem({ type, to, onClick, icon, imgSrc }: NavItemProps) {
  return type === "link" ? (
    <Link to={to!} className="nav-item">
      {imgSrc &&
        (typeof imgSrc === "string" ? <img src={imgSrc} alt="icon" /> : imgSrc)}
    </Link>
  ) : (
    <button onClick={onClick} className="nav-item">
      {/* Render either an image or a React component depending on the type of imgSrc */}
      {imgSrc ? (
        typeof imgSrc === "string" ? (
          <img src={imgSrc} alt="icon" />
        ) : (
          imgSrc
        )
      ) : null}
    </button>
  );
}
