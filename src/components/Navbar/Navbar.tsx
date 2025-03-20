import { HamburgerMenu } from "./HamburgerMenu";
import "./Navbar.css";

export function Navbar() {
    return (
        <header>
            <p className="logo">Lagom kul</p>                      {/*Här ska loggan ligga som en img.  Vi kan skapa en länk runt bilden som länkar tillbaka till startsidan */}

        
            <HamburgerMenu/>

        </header>
    )
}