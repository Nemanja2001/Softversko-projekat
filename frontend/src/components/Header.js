import React from "react";
import { useLocation } from 'react-router-dom';
import logo from "./../photos/logo.jpg";
import './Header.css'
import UlogujSe from "./UlogujSe";
import UlogovanSam from "./UlogovanSam";
function Header(){
    let location = useLocation()
    function promjena_na_test_orijentacije(){
        console.log(localStorage.getItem('token'))
        if(!localStorage.getItem('token')){
            window.location='/login'
        }else{
            window.location='/korisnik/'+localStorage.getItem('username')+'/testorijentacije'
        }
    }

    function promjena_na_pocetnu(){
        if(!localStorage.getItem('token'))
            window.location='/'
        else
            window.location='/korisnik/'+localStorage.getItem('username')
    }

    function promjena_na_oplatformi(){
        if(!localStorage.getItem('token'))
            window.location='/Oplatformi'
        else
            window.location = '/korisnik/'+localStorage.getItem('username')+'/Oplatformi'
    }

    function promjena_na_univerziteti(){
        if(!localStorage.getItem('token'))
            window.location='/univerziteti'
        else
            window.location ='/korisnik/'+localStorage.getItem('username')+'/univerziteti'
    }

    function promjena_na_kontkt(){
        if(!localStorage.getItem('token'))
            window.location='/kontakt'
        else
            window.location='/korisnik/'+localStorage.getItem('username')+'/kontakt'
    }
    
    function promjena_na_admin(){
        window.location='/admin';
    }

    return <div className="flex-conatiner">
                <div><img id="logo" src={logo} alt="Ovjde treba da bude logo" ></img></div>
                <div id="div-flex"> 
                    <div onClick={promjena_na_pocetnu}>Početna</div>
                    <div onClick={promjena_na_oplatformi}>O platformi</div>
                    <div onClick={promjena_na_univerziteti}>Univerziteti</div>
                    <div onClick={promjena_na_test_orijentacije} style={{textAlign:'center'}}>Test profesionalne orijentacije</div>
                    <div onClick={promjena_na_kontkt}>Kontakt</div>
                    {localStorage.getItem('admin')==='1' && <div onClick={promjena_na_admin}>Uredi stranicu</div>}
                </div>
                {!localStorage.getItem('token') && <UlogujSe/>}
                {(location.pathname.includes('korisnik') || location.pathname.includes('admin')) && <UlogovanSam/>}
            </div>
}

export default Header