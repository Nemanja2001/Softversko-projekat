import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import './Admin.css'
import DodajUniverzitet from "../components/Forma dodaj univerzitet";
class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={univerziteti:[], fakulteti:[], univerzitetID:''};
    }
    
    uzmi_univerzitete(){
        axios.get('http://localhost:3001/universities/')
        .then(
            response=>this.setState({univerziteti:response.data})
        )
        .catch(error=>console.error(error))
    }

    uzmi_fakultet(){
        axios.get('http://localhost:3001/faculty/university/'+this.state.univerzitetID)
        .then(
            response=>this.setState({fakulteti:response.data})
        )
        .catch(error=>console.error(error))
    }

    render(){
        this.uzmi_univerzitete();
        return <>
            <div>
                <Header/>
                
                <div id="uredjivanje">
                    <DodajUniverzitet/>
                    <div className="izmjena">
                        <form>
                            <label>Ime Univerziteta</label>
                            <br/>
                            <select>
                                {this.state.univerziteti.map(x=><option>{x.Ime}</option>)}
                            </select>
                            <br/>
                            <label>Ime fakulteta</label>
                            <br/>
                            <input type="text"></input>
                            <br/>
                            <label>Izaberi oblast kojoj pripada fakultet</label>
                            <br/>
                            <select>
                                <option>oblast 1</option>
                                <option>oblast 2</option>
                                <option>oblast 3</option>
                                <option>oblast 4</option>
                                <option>oblast 5</option>
                                <option>oblast 6</option>
                                <option>oblast 7</option>
                            </select>
                            <br/>
                            <button class="btn" style={{marginTop:'30px'}}>Dodaj fakultet</button>
                        </form>
                    </div>
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