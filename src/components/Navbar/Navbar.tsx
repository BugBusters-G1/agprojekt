import { ArrowRight, HelpCircle, SlidersHorizontal } from "lucide-react";
import { ButtonComponent } from "../Button/Button";
import "./Navbar.css";

interface NavbarProps {
    onGenerateNewJoke: () => void
    onToggleExpand: () => void;
    filterToggle: () => void;
}

export function Navbar({onGenerateNewJoke, onToggleExpand,filterToggle }: NavbarProps) {
    return (
       <nav>
            <ButtonComponent onClick={onGenerateNewJoke}>  <ArrowRight size={32} strokeWidth={1.5} /> </ButtonComponent>
            <ButtonComponent onClick={onToggleExpand}><HelpCircle size={32} strokeWidth={1.5} /> </ButtonComponent>
            <ButtonComponent onClick={filterToggle}><SlidersHorizontal size={32} strokeWidth={1.5} /> </ButtonComponent>

      </ButtonComponent>
        </nav>
    )
}
