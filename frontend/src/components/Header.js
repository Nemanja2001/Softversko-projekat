import React from "react";
import logo from "./../photos/logo.jpg";
import './Header.css'
function Header(){
    return <div className="flex-conatiner">
                <div><img src={logo} alt="Ovjde treba da bude logo" ></img></div>
                <div id="div-flex">
                    <div>Početna</div>
                    <div>O platformi</div>
                    <div>Studije</div>
                    <div>Aktivnosti</div>
                    <div>Kontkat</div>
                </div>
                <div id="logovanje">
                    <div>Registruj se</div>
                    <div>Uloguj se</div>
                </div>
            </div>
}

export default Header