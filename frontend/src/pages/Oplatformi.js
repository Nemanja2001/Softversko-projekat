import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Oplatformi.css'

function Oplatformi(){
    return(<>
            <Header/>
            <div>
            <div id="naslovPlat">
                <p>O platformi</p>  
            </div>
            
            <div class="oplatf">
                <div id="div1platf">
                <p class="underline">Naš cilj</p>
                
                </div >
                <div id="div2platf">
                    <p>
                    Naš projekat vidimo kao jedan od načina da se srednjoškolci starijih razreda na vrijeme upoznaju sa mogućnostima na našim fakultetima u državi, da vide kakva su iskustva ljudi sa njihovog željenog fakulteta i da mogu da postave određeno pitanje na koje ostali mogu da vide odgovor jer imaju istu ili sličnu nedoumicu.
                    </p>
                    <p>
                    Takođe kao posrednu beneficiju od našeg projekta vidimo to da bi se možda mnogi studenti zadržali na fakultetima u Crnoj Gori kada bi vidjeli sve mogućnosti koje im se ovdje nude. Veći broj studenata na fakultetima, uz adekvatna predavanja i sistem obrazovanja uticao bi na stvaranje dobrog mladog kadra koji bi se nakon studija zadržao u svojoj zemlji i na taj način pomogao i njenom prosperitetu
                    </p>
                </div>
            </div>
            
            <div class="citat">
                <p>
                    "Znaj gdje da pronađeš informaciju i kako da je iskoristiš – To je tajna uspjeha."
                </p>
                <p id="kuso">
                    Albert Ajnštajn
                </p>
            </div>
            <div id="div3platf">
                <div id="div4platf">
                <p>Misija</p>
                <p>Filozofija</p>
                </div>
                <div id="div5platf">
                <p>Želimo da mladim ljudima pogotovo srednjoškolcima predstavimo i damo podlogu za pomoć pri upisu na fakultet i damo smjernice onim neodlučnim pojedincima koji zbog svog širokog sprektra interesovanja ne mogu sebe tačno da odrede u budućnosti.</p>
                <p>Upis fakulteta je bitna odluka za svaku mladu osobu, stoga je bitno da postoji pravo mjesto na kojem će moći da se informišu i da postave dobre temelje za svoje razmišljanje i odabir svoje karijere.</p>
                </div>
            </div>
            </div>
            <Footer/>
    
        </>)
}
export default Oplatformi