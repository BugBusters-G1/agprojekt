import { ButtonComponent } from "../Button/Button";
import "./Navbar.css";


interface NavbarProps {
    onGenerateNewJoke: () => void
}

export function Navbar({onGenerateNewJoke}: NavbarProps) {
    return (
       <nav>
            <ButtonComponent onClick={onGenerateNewJoke} />
       </nav>
    )
}