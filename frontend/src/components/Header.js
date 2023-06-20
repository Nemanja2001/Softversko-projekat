import React from "react";
import logo from "./../photos/logo.jpg";
import './Header.css'
function Header(){
    return <div className="flex-conatiner">
                <div><img id="logo" src={logo} alt="Ovjde treba da bude logo" ></img></div>
                <div id="div-flex"> 
                    <div onClick={()=>window.location='/'}>Početna</div>
                    <div>O platformi</div>
                    <div>Univerziteti</div>
                    <div>Aktivnosti</div>
                    <div onClick={()=>window.location='/kontakt'}>Kontakt</div>
                </div>
                <div id="logovanje">
                    <div>Registruj se</div>
                    <div onClick={()=>window.location='/login'}>Uloguj se</div>
                </div>
            </div>
}

export default Header