import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Test.css'

function TestOrijentacijePocetna(){
    return (<>
        <Header/>
            <div class="test">
                <div>
                    <h1>Test profesionalne orijentacije</h1>
                </div>
                <div class="oTestu" >
                    <p>
                    Čovjek provede 2/3 svog života radeći i iz tog razloga je važno da posao koji odaberete bude u skladu sa
                     vašim sposobnostima, karakteristikama ličnosti, vašim željama i sklonostima, kako bi u njemu mogli 
                     da uživate a samim tim i da budete produktivniji i uspešniji.
                    </p>
                    <p>
                        Naš  cilj je da Vam pomognemo u donošenju jedne ovako važne odluke, kao što je odabir fakulteta. Pored 
                        informacija o fakultetima koje možete dobiti na našem sajtu nudimo Vam i test profesionalne orijentacije,
                        koji je pažljivo sastavljen kako bi Vam pomogao u Vašem odabiru. 
                    </p>
                    <p>
                        Kako bi započeli test kliknite na dugme ispod i pažljivo pratite uputstva za izradu u nastavku, a mi ćemo 
                        obraditi Vaše odgovore i u skladu sa tim dati Vam rezultate testa.
                        <br/> 
                        SREĆNO!
                    </p>
                </div>
                <div>
                    <button style={{width:"400px", height:"50px"}}class="btn" onClick={()=>{window.location = '/korisnik/'+localStorage.getItem('username')+'/testorijentacije/Test';}} >Započni test</button>
                </div>
            </div>    
        <Footer/>   
        </>
    )
}
export default TestOrijentacijePocetna
