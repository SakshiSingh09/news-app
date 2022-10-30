import React from "react";
import logo from "../images/logo2.png";

export default function Header(){
    return(
        <div className="header">
        <div>
            <h1 className="heading">EXAMI<span style={{color : "#fb4c35"}}>NE</span></h1>
        </div>
        <div>
            <img src={logo} alt="logo" className="logo"/>
        </div>
        </div>
    )
}