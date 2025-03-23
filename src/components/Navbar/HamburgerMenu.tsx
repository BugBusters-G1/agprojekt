import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export function HamburgerMenu() {


    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev )
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (

        <div>

            <div className="hamburger-container">
                <button className="menu-button" onClick={toggleMenu}>☰</button>
            </div>

            {isOpen && (
                <nav className="hamburger-menu">
                    
                    <button className="close-button" onClick={closeMenu}>
                        <X size={28} strokeWidth={2.5} />
                    </button>

                    <ul>
                        <li><Link to="/saved" onClick={closeMenu}>Saved jokes</Link></li>
                        <li><Link to="/filter" onClick={closeMenu}>Filter jokes</Link></li>
                    </ul>

                </nav>
            )}

        </div>


       
    )
}