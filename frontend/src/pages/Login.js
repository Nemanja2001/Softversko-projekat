import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Header from "../components/Header";

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
            <form>
                <input type="text" value={this.state.user} name='user' onChange={this.textChanged}/>
                <br/>
                <input type="password" value={this.state.pass} name='pass' onChange={this.textChanged}/>
                <br/>
                <button onClick={this.onButtonClick}>Loguj se</button>
            </form>
            
        </div>
          )
    }

}

export default Login