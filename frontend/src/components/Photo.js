import React from "react";
import "./Photo.css";
import slika from "./../photos/masan2.jpg";
function Photo() {
  return (
    <div>
      <div id="div1">
        <img id="slika1" src={slika} alt="Ovdje ide Masanova slika"></img>
      </div>
      <div id="div2">
        <p id="Naslov1">Kuda dalje</p>
        <hr></hr>
        <h3>
          Jedino ograničenje našem dostignuću je naša sposobnost da tačno
          odredimo ono što želimo. – Entoni Robins
        </h3>
        <button class="btn" onClick={() => (window.location = "/univerziteti")}>
          Univerziteti
        </button>
      </div>
    </div>
  );
}

export default Photo;
