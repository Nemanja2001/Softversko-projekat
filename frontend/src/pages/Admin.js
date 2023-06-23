import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import './Admin.css'
import DodajUniverzitet from "../components/Forma dodaj univerzitet";
import DodajFakultet from "../components/Forma dodaj fakultet";
import DodajFakultetskuJedinicu from "../components/Forma dodaj fakultetsku jedinicu";
class Admin extends React.Component{
    render(){
        
        return <>
            <div>
                <Header/>
                
                <div id="uredjivanje">
                    <DodajUniverzitet/>
                    <DodajFakultet />
                    <DodajFakultetskuJedinicu />
                </div>
                <Footer/>
                
            </div>
        </>
    }

}

export default Admin