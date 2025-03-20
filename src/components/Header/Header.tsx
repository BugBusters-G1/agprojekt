import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
    return (
        <header>
            <p>Lagom kul</p>                      {/*Här ska loggan ligga som en img.  Vi kan skapa en länk runt bilden som länkar tillbaka till startsidan */}

        
            <HamburgerMenu/>

        </header>
    )
}