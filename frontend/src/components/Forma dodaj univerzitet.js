import React from "react";
import axios from "axios";
//import './../components/Admin.css'
class DodajUniverzitet extends React.Component{
    constructor(props){
        super(props);
        this.state={drzave:[], ime:'',drzava:'',opis:'',slika:''};
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
            <input type="text" value={this.state.ime} onChange={(e)=>this.setState({ime:e.target.value})} placeholder="Unesi ime Univerziteta..."></input>
            <br/>
            <label>Izaberite državu</label>
            <br/>
            <select onChange={(e)=>this.setState({drzava:e.target.value})}>
                <option>Izaberite drzavu u kojoj se nalazi Univerzitet...</option>
                {this.state.drzave.map(x=><option value={x.Ime}>{x.Ime}</option>)}
            </select>
            <br/>
            <label>Unesite opis fakulteta</label>
            <br/>
            <input type="text" value={this.state.opis} onChange={(e)=>this.setState({opis:e.target.value})} placeholder="Unesi opis Univerziteta..."></input>
            <br/>
            <label>Unesite URL fotografije koju želite da imate na svom Univerzitetu</label>
            <br/>
            <input type="text" value={this.state.slika} onChange={(e)=>this.setState({slika:e.target.value})} placeholder="Unesi sliku Univerziteta..."></input>
            <br/>
            <button class="btn" style={{marginTop:'30px'}} onClick={()=>{
                let data = {ime:this.state.ime, naziv_drzave:this.state.drzava, opis:this.state.opis, slika:this.state.slika}
                axios.post('http://localhost:3001/universities/',data)
                    .then(response=>{
                        if(!response.data || response===null){
                            alert('Greska');
                        }else{
                            alert('Proslo');
                        }
                    })
                    .catch(error=>alert('Greska'))
                    .finally(alert("Proslo"));
            }}>Dodaj Univerzitet</button>
        </form>
    </div>
    )}
}

export default DodajUniverzitet