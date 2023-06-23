import React from "react"
import Header from "../components/Header"
import Photo from "../components/Photo"
import Text from "../components/Text"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
function PocetnaStranica(){
    let location = useLocation()
    function provjera(){
        if(!location.pathname.includes('korisnik') && !location.pathname.includes('admin')){
            localStorage.removeItem('token');
            localStorage.removeItem('admin');
            localStorage.removeItem('username');
        }
    }

    provjera();

    return(<>
        <Header/>
        <Photo/>
        <Text/>
        <Footer/>
    </>
    )
}

export default PocetnaStranica