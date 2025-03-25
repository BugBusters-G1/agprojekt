import LogoWithName from "../../assets/LogoWithName.png"
import { Link } from "react-router-dom"
import "./Header.css"

export function Header (){
    return (
        <header className="app-header">
            <Link to="/">
                 <img src={LogoWithName} alt="Lagom kul logotyp" className="app-header-logo" />
            </Link>
            
        </header>
    )
}