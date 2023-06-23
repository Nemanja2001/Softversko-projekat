import React from "react";
import axios from "axios";

class DodajFakultetskuJedinicu extends React.Component{
    constructor(props){
        super(props);
        this.state = {univerziteti:[], fakulteti:[], univerzitetID:'1', imefakulteta:'', ime:'',url:'', opis:'',slika:''}
    }
    uzmi_univerzitete(){
        axios.get('http://localhost:3001/universities/')
        .then(
            response=>this.setState({univerziteti:response.data})
        )
        .catch(error=>console.error(error))
    }

    uzmi_fakultet_na_osnovu_univerziteta(){
        axios.get('http://localhost:3001/faculty/university/'+this.state.univerzitetID)
            .then(response=>{
                this.setState({fakulteti:response.data})
            })
            .catch(error=>alert('Greška'));
    }
    render(){
        this.uzmi_univerzitete();
        this.uzmi_fakultet_na_osnovu_univerziteta()
        return<>
            <div className="izmjena">
                <form>
                    <label>Ime Univerziteta</label>
                    <br/>
                    <select onChange={(e)=>{
                        this.setState({univerzitetID:e.target.value});
                        this.uzmi_fakultet_na_osnovu_univerziteta();
                    }}>
                        <option>Izaberite univerzitet...</option>
                        {this.state.univerziteti.map(x=><option value={x.ID}>{x.Ime}</option>)}
                    </select>
                    <br/>
                    <label>Ime fakulteta</label>
                    <br/>
                    <select onChange={(e)=>this.setState({imefakulteta:e.target.value})}>
                        {<option>Uzaberite ime fakulteta...</option> &&
                        this.state.fakulteti.map(x=><option value={x.Ime}>{x.Ime}</option>)}
                    </select>
                    <br/>
                    <label>Ime fakultetske jedinice</label>
                    <br/>
                    <input type="text" value={this.state.ime} onChange={(e)=>this.setState({ime:e.target.value})}></input>
                    <br/>
                    <label>Unesi URL prema fakultetskoj jedinici</label>
                    <br/>
                    <input type="text" value={this.state.url} onChange={(e)=>this.setState({url:e.target.value})}></input>
                    <br/>
                    <label>Unesite opis fakultetske jedinice</label>
                    <br/>
                    <input type="text" value={this.state.opis} onChange={(e)=>this.setState({opis:e.target.value})}></input>
                    <br/>
                    <label>Unesite URL za sliku fakultetske jedinice</label>
                    <br/>
                    <input style={{width:'auto', height:'auto'}}type="text" value={this.state.slika} 
                        onChange={(e)=>this.setState({slika:e.target.value})}></input>
                    <br/>
                    <button class="btn" style={{width:'auto', marginTop:'30px'}} onClick={()=>{
                        let data={
                            UniversityID:this.state.univerzitetID,
                            FacultyName:this.state.imefakulteta,
                            Name:this.state.ime, 
                            URL:this.state.url,
                            Opis:this.state.opis,
                            Slika:this.state.slika
                        };
                        axios.post('http://localhost:3001/facultyunit', data)
                            .then(response=>alert('Uspijeh'))
                            .catch(error => alert('Greška'))
                    }}>Dodaj fakultetsku jedinicu</button>
                </form>
            </div>
        </>
    }

}

export default DodajFakultetskuJedinicu