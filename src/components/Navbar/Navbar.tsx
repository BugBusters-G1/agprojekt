import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { ButtonComponent } from "../Button/Button";
import "./Navbar.css";

interface NavbarProps {
  onGenerateNewJoke: () => void;
  filterToggle: () => void;
}

export function Navbar({ onGenerateNewJoke, filterToggle }: NavbarProps) {
  return (
    <nav>
      <ButtonComponent onClick={onGenerateNewJoke}>
        {" "}
        <ArrowRight size={32} strokeWidth={1.5} />{" "}
      </ButtonComponent>

      <ButtonComponent onClick={filterToggle}>
        <SlidersHorizontal size={32} strokeWidth={1.5} />{" "}
      </ButtonComponent>
    </nav>
  );
}
