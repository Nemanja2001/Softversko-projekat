import React from "react";
import './Text.css'
function Text(){
    const predifinedtext ="Korak više \n u \n daljem obrazovanju";
    const text1 ="Svjesni činjenice da su maturanti pretežno djeca uzrasta od 18 do\n 19 godina i da su samim tim tek na početku formiranja svoje ličnosti i svoje\n karijere, često su vrlo neodlučni i odabir budućeg\n zanimanja kroz odabir fakulteta, za njih najčešće predstavlja veliki\n izazov. Odabir fakulteta, sam po sebi, predstavlja prekretnicu u\n životima mladih ljudi zbog čega je još jasnija neodlučnost\n maturanata kada je ovako važna odluka u pitanju. Podrazumijeva\n se da je to odluka koju će svi oni samostalno morati da donesu, ali\n kako su mladi ljudi budućnost društva, nastojimo da im pomoću\n ovog servisa bar malo olakšamo."
    const text2 ="Našu platformu vidimo kao jedan od načina da  srednjoškolci\n starijih razreda na vrijeme upoznaju mogućnosti na našim\n fakultetima u državi, da vide kakva su iskustva ljudi sa njihovog\n željenog fakulteta i da mogu da postave određeno pitanje na koje \nostali mogu da vide odgovor, ako imaju istu ili sličnu nedoumicu."
    
    return <div id="div">
        <div><p id="paragraph1" style={{whiteSpace:'pre-line'}}>{predifinedtext}</p></div>
        <div id="div3-flex">
            <div>
                {text1}
            </div>
            <div>
                {text2}
            </div>
        </div>
    </div>
}

export default Text