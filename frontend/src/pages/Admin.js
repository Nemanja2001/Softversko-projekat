import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={drzave:[], univerziteti:[]};
    }

    uzmi_drzave(){
        axios.get('http://localhost:3001/country/')
        .then(
            response=>this.setState({drzave:response.data})
        )
        .catch(error=>console.error(error))
    }

    uzmi_univerzitete(){
        axios.get('http://localhost:3001/universities/')
        .then(
            response=>this.setState({univerziteti:response.data})
        )
        .catch(error=>console.error(error))
    }

    render(){
        this.uzmi_drzave();
        this.uzmi_univerzitete();
        return<>
            <div>
                <Header/>
                
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div id='univerzitet'>
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
                            <button>Dodaj univerzitet</button>
                        </form>
                    </div>
                    <div id='fakultet'>
                        <form style={{flexDirection:"column"}}>
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
                            <button>Dodaj fakultet</button>
                        </form>
                    </div>
                    <div id='fakultetskajedinica'>
                        <form style={{flexDirection:"column"}}>
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
                            <button>Dodaj fakultet</button>
                        </form>
                    </div>
                </div>
                <Footer/>
                
            </div>
        </>
    }

}

export default Admin