import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar">
        <ul>
            <li><NavLink to="/" className="link">Home</NavLink></li>
            <li><NavLink to="/health" className="link">Health</NavLink></li>
            <li><NavLink to="/politics" className="link">Politics</NavLink></li>
            <li><NavLink to="/meme" className="link">Crime</NavLink></li>
            <li><NavLink to="/sports" className="link">Sports</NavLink></li>
            <li><NavLink to="/fashion" className="link">Fashion</NavLink></li>
            <li><NavLink to="/tech" className="link">Technology</NavLink></li>
        </ul>
    </nav>
    )
}