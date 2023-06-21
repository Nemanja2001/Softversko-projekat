import React from "react";
import './Photo.css'
import slika from './../photos/masan.jpg'
function Photo(){
    return <div>
            <div id="div1">
                <img id="slika1"src={slika} alt="Ovdje ide Masanova slika">
            </img>
            </div>
            <div id="div2">
                <hr></hr>
                <h1 id="Naslov1">Kuda dalje</h1>
                <h3>Jedino ograničenje našem dostignuću je naša sposobnost da tačno odredimo ono što želimo. – Entoni Robins</h3>
                <button id="btn" >Univerziteti</button>
            </div>    
            </div>
}

export default Photo