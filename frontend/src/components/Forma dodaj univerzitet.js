import React from "react";
import axios from "axios";
//import './../components/Admin.css'
class DodajUniverzitet extends React.Component{
    constructor(props){
        super(props);
        this.state={drzave:[]}
    }
    uzmi_drzave(){
        axios.get('http://localhost:3001/country/')
        .then(
            response=>this.setState({drzave:response.data})
        )
        .catch(error=>console.error(error))
    }
  render(){
    this.uzmi_drzave();
    return(
    <div className='izmjena'>
        <form>
            <label>Ime Univerziteta:</label>
            <br/>
            <input type="text"></input>
            <br/>
            <label>Izaberite državu</label>
            <br/>
            <select>
                {this.state.drzave.map(x=><option>{x.Ime}</option>)}
            </select>
            <br/>
            <label>Unesite opis fakulteta</label>
            <br/>
            <input type="text"></input>
            <br/>
            <label>Unesite URL fotografije koju želite da imate na svom Univerzitetu</label>
            <br/>
            <input type="text"></input>
            <br/>
            <button class="btn" style={{marginTop:'30px'}}>Dodaj univerzitet</button>
        </form>
    </div>
    )}
}

export default DodajUniverzitet