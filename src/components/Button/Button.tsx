import "./Button.css";
import { ArrowRight } from "lucide-react";

interface ButtonComponentProps {
  onClick: () => void;
}

export function ButtonComponent({ onClick }: ButtonComponentProps) {
  return (
    <button className="card-button" onClick={onClick}>
      <ArrowRight size={32} strokeWidth={1.5} />
    </button>
  );
}
