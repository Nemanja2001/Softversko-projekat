import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import './Admin.css'
import DodajUniverzitet from "../components/Forma dodaj univerzitet";
import DodajFakultet from "../components/Forma dodaj fakultet";
class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={univerziteti:[], fakulteti:[], univerzitetID:''};
        this.uzmi_univerzitete();
    }

    
    uzmi_univerzitete(){
        axios.get('http://localhost:3001/universities/')
        .then(
            response=>this.setState({univerziteti:response.data})
        )
        .catch(error=>console.error(error))
    }
    render(){
        
        return <>
            <div>
                <Header/>
                
                <div id="uredjivanje">
                    <DodajUniverzitet/>
                    <DodajFakultet />
                    <div className="izmjena">
                        <form>
                            <label>Ime Univerziteta</label>
                            <br/>
                            <select onChange={this.uzmi_fakultet}>
                                {this.state.univerziteti.map(x=><option>{x.Ime}</option>)}
                            </select>
                            <br/>
                            <label>Ime fakulteta</label>
                            <br/>
                            <select>
                                {this.state.fakulteti.map(x=><option>{x.Ime}</option>)}
                            </select>
                            <br/>
                            <label>Ime fakultetske jedinice</label>
                            <br/>
                            <input type="text"></input>
                            <br/>
                            <label>Unesi URL prema fakultetskoj jedinici</label>
                            <br/>
                            <input type="text"></input>
                            <br/>
                            <label>Unesite opis fakultetske jedinice</label>
                            <br/>
                            <input type="text"></input>
                            <br/>
                            <label>Unesite URL za sliku fakultetske jedinice</label>
                            <br/>
                            <input style={{width:'auto', height:'auto'}}type="text"></input>
                            <br/>
                            <button class="btn" style={{width:'auto', marginTop:'30px'}}>Dodaj fakultetsku jedinicu</button>
                        </form>
                    </div>
                </div>
                <Footer/>
                
            </div>
        </>
    }

}

export default Admin