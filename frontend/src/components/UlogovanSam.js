import React from "react";
import './UlogovanSam.css'
class UlogovanSam extends React.Component{
    
    onclick_fun(){
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('admin');
        window.location ='/'
    }
    
    render(){
        //this.dobij_korisnika()
        return<div class="dropdown">
        <button class="dropbtn">Prijavljeni ste</button>
        <div class="dropdown-content">
          <p onClick={this.onclick_fun}>Izloguj se</p>
        </div>
      </div>
    }
}

export default UlogovanSam