import React from "react";
import { useLocation } from 'react-router-dom';
import logo from "./../photos/logo.jpg";
import './Header.css'
import UlogujSe from "./UlogujSe";
import UlogovanSam from "./UlogovanSam";
function Header(){
    let location = useLocation()
    function provjera_tokena(){
        console.log(localStorage.getItem('token'))
        if(!localStorage.getItem('token')){
            window.location='/login'
        }else{
            window.location='/testorijentacije'
        }
    }

    return <div className="flex-conatiner">
                <div><img id="logo" src={logo} alt="Ovjde treba da bude logo" ></img></div>
                <div id="div-flex"> 
                    <div onClick={()=>{
                        if(!localStorage.getItem('token'))
                            window.location='/'
                        else
                            window.location='/korisnik/'+localStorage.getItem('username')
                    }}>Početna</div>
                    <div onClick={()=>{
                        if(!localStorage.getItem('token'))
                            window.location='/Oplatformi'
                        else
                            window.location = '/korisnik/'+localStorage.getItem('username')+'/Oplatformi'
                        }}>O platformi</div>
                    <div onClick={()=>{
                        if(!localStorage.getItem('token'))
                            window.location='/univerziteti'
                        else
                            window.location ='/korisnik/'+localStorage.getItem('username')+'/univerziteti'
                        }}>Univerziteti</div>
                    <div onClick={provjera_tokena} style={{textAlign:'center'}}>Test profesionalne orijentacije</div>
                    <div onClick={()=>{
                        if(!localStorage.getItem('token'))
                            window.location='/kontakt'
                        else
                            window.location='/korisnik/'+localStorage.getItem('username')+'/kontakt'
                    }}>Kontakt</div>
                </div>
                {!location.pathname.includes('korisnik') && <UlogujSe/>}
                {location.pathname.includes('korisnik') && <UlogovanSam/>}
            </div>
}

export default Header