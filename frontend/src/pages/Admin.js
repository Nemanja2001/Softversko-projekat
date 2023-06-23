import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={drzave:[]};
    }

    uzmi_drzave(){
        axios.get('http://localhost:3001/country/')
        .then(
            response=>this.setState({drzave:response.data})
        )
    }

    render(){
        this.uzmi_drzave();
        return<>
            <div>
                <Header/>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} onClick={()=>{
                    document.getElementById('forma-univerzitet').style.display='flex'
                }}> 
                    <div style={{display:"flex"}}>
                        <button>Dodaj novi Univerzitet</button>
                    </div> 
                    <div>
                        <button>Dodaj novi fakultet</button>
                    </div>
                    <div>
                        <button>Dodaj novu fakultetsku jedinicu</button>
                    </div>
                    
                </div>
                <div id='forma-univerzitet'style={{display:"none"}}>
                    <form style={{flexDirection:"column"}}>
                        <label>Ime Univerziteta</label>
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
                        <button>Dodaj</button>
                    </form>
                </div>
                <Footer/>
                
            </div>
        </>
    }

}

export default Admin