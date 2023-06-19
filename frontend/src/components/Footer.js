import React from "react";
import './Footer.css'

function Footer(){
    return(<div style={{backgroundColor:'#F7F3F5'}}>
        <div id="info-flex">
            <div id="prvi_sin" style={{lineHeight:'150%'}}>
                <div style={{fontWeight:'bold',fontSize:'25px'}}>Kuda dalje</div>
                <br/>
                <div>Podgorica, Crna Gora</div>
                <div>81000</div>
            </div>
            <div id="unutrasnji-flex">
                <div  style={{lineHeight:'150%'}}>
                    <div style={{fontWeight:'bold',fontSize:'25px'}}>Sjedište</div>
                    <br/>
                    <div>Univerzitet Crne Gore</div>
                    <div>Address: 2 Cetinjski Put, Podgorica 81000</div>
                </div>
                <div  style={{lineHeight:'150%'}}>
                    <div style={{fontWeight:'bold',fontSize:'25px'}}>Radili</div>
                    <br/>
                    <div>Lucija Jovanović</div>
                    <div>Nemanja Dragišić</div>
                    <div>Matija Veljović</div>
                    <div>Danilo Marković</div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        
        <div id="nav-flex">
            <div style={{flex:'1'}}></div>
            <div style={{flex:'2'}}>
                <div>Početna</div>
                <div>O platformi</div>
                <div>Studije</div>
                <div>Aktivnosti</div>
                <div>Kontkat</div>
            </div>
            <div style={{flex:'1'}}></div>
        </div>
        <br/>
        <br/>
        
    </div>)
}

export default Footer