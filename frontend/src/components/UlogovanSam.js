import React from "react";
import './UlogovanSam.css'
class UlogovanSam extends React.Component{
    constructor(params){
        super(params);
        this.state={name:"", surname:"", email:params.mail}
    }
    onclick_fun(){
        localStorage.removeItem('token');
        window.location ='/'
    }
    
    render(){
        //this.dobij_korisnika()
        return<div class="dropdown">
        <button class="dropbtn">Prijavljeni ste</button>
        <div class="dropdown-content">
          <a onClick={this.onclick_fun}>Izloguj se</a>
        </div>
      </div>
    }
}

export default UlogovanSam