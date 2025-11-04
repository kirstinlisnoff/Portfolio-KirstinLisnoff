import { NavLink } from "react-router-dom";

function Nav({ menuOpen }) {
    return (
    
    <div className="navbar">
     <nav className={menuOpen ? "open" : ""}>
        <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#portfolio">works</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#resume">resume</a></li>   
        </ul>
     </nav>
     </div>
    );
}

export default Nav;