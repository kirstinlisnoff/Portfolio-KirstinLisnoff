import { NavLink } from "react-router-dom";

function Nav() {
    return (
    // <nav>
    //     <NavLink to="/" className={({ isActive }) =>  isActive ? "active" : "notaactive"}>About Me</NavLink>
    //     <NavLink to="/portfolio" className={({ isActive }) =>  isActive ? "active" : "notaactive"}>Portfolio</NavLink>
    //     <NavLink to="/contact" className={({ isActive }) =>  isActive ? "active" : "notaactive"}>Contact</NavLink>
    //     <NavLink to="/resume" className={({ isActive }) =>   isActive ? "active" : "notaactive"}>Resume</NavLink>
    //     </nav> 
    <nav className="navbar">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
     </nav>
    );
}

export default Nav;