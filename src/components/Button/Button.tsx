import { Children, ReactNode } from "react";
import "./Button.css";

interface ButtonComponentProps {
  onClick: () => void;
  children: ReactNode;
}

export function ButtonComponent({ onClick, children }: ButtonComponentProps) {
  return (
    <button className="card-button" onClick={onClick}>
      {children}
    </button>
  );
}
