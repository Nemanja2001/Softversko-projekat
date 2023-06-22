import React from "react";
import './Header.css'
class UlogujSe extends React.Component{
    

    render(){
        return<><div id="logovanje">
        <div className="div-register" onClick={()=>window.location='/registracija'}>Registruj se</div>
        <div className="div-register" onClick={()=>window.location='/login'}>Uloguj se</div>
        </div></>
    }
}

export default UlogujSe