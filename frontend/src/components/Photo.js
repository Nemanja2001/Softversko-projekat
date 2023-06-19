import React from "react";
import './Photo.css'
import slika from './../photos/varja.jpeg'
function Photo(){
    return <div>
            <div id="div1">
                <img id="slika1"src={slika} alt="Ovdje ide Masanova slika">
            </img>
            </div>
            <div id="div2">
                <hr></hr>
                <h1 id="Naslov1">Kuda dalje</h1>
            </div>    
            </div>
}

export default Photo