import Nav from "./nav"
import "./header.css"
import { useState } from "react"

function Header() {
     const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
        <header className="header">
         <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
                <span></span>
                <span></span>
                <span></span>
            </button>
             <Nav menuOpen={menuOpen} />
     </header>  
    )
}

export default Header;