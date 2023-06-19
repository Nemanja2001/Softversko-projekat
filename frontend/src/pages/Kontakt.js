import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Kontakt.css'

function Kontakt(){
    return (<>
        <Header/>
        <div id="div1">
        <p >Pošalji nam poruku</p>
        <input type="text" placeholder="Ime i prezime"></input>
        <br/>
        <input type="email" placeholder="Email adresa"></input>
        <br/>
        <input type="text" placeholder="Tema"></input>
        <br/>
        <input  id="komentar" type="textarea" placeholder="Tekst poruke"></input>
        <br/>
        <input id="btnPosalji" type="submit" value="Pošalji"></input>
        </div>
        <Footer/>
        </>
        
    )
}
export default Kontakt