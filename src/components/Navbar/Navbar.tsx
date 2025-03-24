import { ArrowRight } from "lucide-react";
import { ButtonComponent } from "../Button/Button";
import "./Navbar.css";


interface NavbarProps {
    onGenerateNewJoke: () => void
}

export function Navbar({onGenerateNewJoke}: NavbarProps) {
    return (
       <nav>
            <ButtonComponent onClick={onGenerateNewJoke}>  <ArrowRight size={32} strokeWidth={1.5} /> </ButtonComponent>
        </nav>
    )
}