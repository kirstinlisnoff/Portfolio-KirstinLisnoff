import { NavLink } from "react-router-dom";

function Nav() {
    return (
    <nav>
        <NavLink to="/" className={({ isActive }) =>  isActive ? "active" : "notaactive"}>About Me</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) =>  isActive ? "active" : "notaactive"}>Portfolio</NavLink>
        <NavLink to="/contact" className={({ isActive }) =>  isActive ? "active" : "notaactive"}>Contact</NavLink>
        <NavLink to="/resume" className={({ isActive }) =>   isActive ? "active" : "notaactive"}>Resume</NavLink>
        </nav> 
    )
}

export default Nav;