import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "./../photos/logo.jpg";

import './Register.css';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={ime:'',prezime:'',email:'',username:'',sifra:'',};
    }

    onButtonClick = () => {
        let data = {ime:this.state.ime,prezime:this.state.prezime, email:this.state.email,
            username:this.state.username, pass:this.state.sifra,type:'0'}
        axios.post('http://localhost:3001/', data).then(
          (response) => {
            if(typeof response.data[0]==undefined || !response.data) 
                window.alert('Neuspjesna registracija');
            else {
                window.alert('Uspjesna registracija');
                window.location='/login';
            }
            }
            ).catch(error=>console.error(error));
        
    }

    textChanged = (e)=>{
        console.log(e.target)
        const { name, value } = e.target;
        this.setState({[name]:value});
    }
  
    render() {
        return (
          <div>
            <Header/>
            <div id='divforma'>
            <img id='pozadina' src={logo} alt="" />
            <form id='forma-css'>
                <label htmlFor='userinput' className="loginlabel">Ime</label>
                <input id="userinput" className="input-login" type="text" value={this.state.ime} name='ime' onChange={this.textChanged}/>
                <br/>
                <label htmlFor='userinput' className="loginlabel">Prezime</label>
                <input id="userinput" className="input-login" type="text" value={this.state.prezime} name='prezime' onChange={this.textChanged}/>
                <br/>
                
                <label htmlFor='userinput' className="loginlabel">Email</label>
                <input id="userinput" className="input-login" type="text" value={this.state.email} name='email' onChange={this.textChanged}/>
                <br/>
                <label htmlFor='userinput' className="loginlabel">Username</label>
                <input id="userinput" className="input-login" type="text" value={this.state.username} name='username' onChange={this.textChanged}/>
                <br/>
                <label htmlFor='passinput' className="loginlabel">Šifra</label>
                <input id="passinput" className="input-login" type="password" value={this.state.sifra} name='sifra' onChange={this.textChanged}/>
                <br/>
                <button id='loginbtn' onClick={this.onButtonClick}>Registruj se</button>
            </form>
            </div>
            
            <Footer/>
        </div>
          )
    }

}
export default Register