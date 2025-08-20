import { NavLink } from "react-router-dom";

function Nav() {
    return (
    
    <nav className="navbar">
        <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#portfolio">works</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#resume">resume</a></li>   
        </ul>
        
     </nav>
    );
}

export default Nav;