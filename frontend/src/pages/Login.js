import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "./../photos/logo.jpg"
import './Login.css'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''};
    }
    
    onButtonClick = () => {
        let data = {email:this.state.user, pass:this.state.pass}
        axios.post('http://localhost:3001/login/', data).then(
            
          (response) => {
            if(!response.data)
                window.alert('Login failed');
            else {
                localStorage.setItem('token', response.data);
                window.alert('Uspio login')
                window.location = '/kontakt'
            }
        },
            (err)=>{
                console.log(err);
                window.alert(err);
            }
            );
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
                <label htmlFor='userinput' className="loginlabel">Korisničko ime ili e-mail</label>
                <input id="userinput" className="input-login" type="text" value={this.state.user} name='user' onChange={this.textChanged}/>
                <br/>
                <label htmlFor='passinput' className="loginlabel">Šifra</label>
                <input id="passinput" className="input-login" type="password" value={this.state.pass} name='pass' onChange={this.textChanged}/>
                <br/>
                <button id='loginbtn' onClick={this.onButtonClick}>Prijavi se</button>
            </form>
            </div>
            
            <Footer/>
        </div>
          )
    }

}

export default Login