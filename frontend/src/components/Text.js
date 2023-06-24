import React from "react";
import "./Text.css";
import video from "./../photos/video.mp4";
import slika from "./../photos/DrNemanjaPrvi.jpg";
function Text() {
  const predifinedtext = "Korak više u \n daljem obrazovanju";
  const text1 =
    "Svjesni činjenice da su maturanti pretežno djeca uzrasta od 18 do 19 godina\n i da su samim tim tek na početku formiranja svoje ličnosti i svoje karijere,\n često su vrlo neodlučni i odabir budućeg zanimanja kroz odabir fakulteta, \nza njih najčešće predstavlja veliki izazov. Odabir fakulteta, sam po sebi, \npredstavlja prekretnicu u životima mladih ljudi zbog čega je još jasnija\n neodlučnost maturanata kada je ovako važna odluka u pitanju. \nPodrazumijeva se da je to odluka koju će svi oni samostalno morati \nda donesu, ali kako su mladi ljudi budućnost društva, nastojimo \nda im pomoću ovog servisa bar malo olakšamo.";
  const text2 =
    "Našu platformu vidimo kao jedan od načina da  srednjoškolci\n starijih razreda na vrijeme upoznaju mogućnosti na našim\n fakultetima u državi, da vide kakva su iskustva ljudi sa njihovog\n željenog fakulteta i da mogu da postave određeno pitanje na koje \nostali mogu da vide odgovor, ako imaju istu ili sličnu nedoumicu.";

  return (
    <div id="div">
      <div>
        <p id="paragraph1" style={{ whiteSpace: "pre-line" }}>
          {predifinedtext}
        </p>
      </div>
      <div id="div3-flex">
        <div>{text1}</div>
        <div>{text2}</div>
      </div>
      <br />
      <video src={video} controls poster={slika}></video>
      <br />
      <br />
    </div>
  );
}

export default Text;
