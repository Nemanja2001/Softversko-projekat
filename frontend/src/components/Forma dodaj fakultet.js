import React from "react";
import axios from "axios";
class DodajFakultet extends React.Component{
    constructor(props){
        super(props);
        this.state={univerziteti:[], univerzitetID:'', facultyname:'', oblast:''};
        
        console.log(this.state)
    }
    uzmi_univerzitete(){
        axios.get('http://localhost:3001/universities/')
        .then(
            response=>this.setState({univerziteti:response.data})
        )
        .catch(error=>console.error(error))
    }

    postavi_fakultet(){
        
        let data ={UniversityID:this.state.univerzitetID, name: this.state.facultyname, oblast:this.state.oblast}
        axios.post('http://localhost:3001/faculty', data)
            .then(response=>{
                if(response===null || !response.data){
                    alert("greska")
                }else{
                alert('Usao sam')
                console.log(response.data)}
            })
            .catch(error=>{
                console.log(error)
                
            })
            .finally(
                alert("kraj")
            )

    }

    render(){
        this.uzmi_univerzitete();
        return<>
            <div className="izmjena">
                <form>
                    <label>Ime Univerziteta</label>
                    <br/>
                    <select onClick={(e)=>{
                        this.setState({univerzitetID:e.target.value})
                        console.log(this.state)}}>
                        {this.state.univerziteti.map(x=><option value={x.ID}>{x.Ime}</option>)}
                    </select>
                    <br/>
                    <label>Ime fakulteta</label>
                    <br/>
                    <input value={this.state.facultyname} type="text" onChange={(e)=>{this.setState({facultyname:e.target.value})
                        console.log(this.state)}}></input>
                    <br/>
                    <label>Izaberi oblast kojoj pripada fakultet</label>
                    <br/>
                    <select onChange={(e)=>{
                        this.setState({oblast:e.target.value})
                        console.log(this.state)}}>
                        <option></option>
                        <option value="oblast1">Sport</option>
                        <option value="oblast2">Umjetnost</option>
                        <option value="oblast3">Jezici</option>
                        <option value="oblast4">Humanističke nauke</option>
                        <option value="oblast5">Medicina, hemija, biologija</option>
                        <option value="oblast6">Matetmaika, elektro, informatika, programiranje, fizika</option>
                        <option value="oblast7">Građevina, arhitektura, dizajn</option>
                    </select>
                    <br/>
                    <button class="btn" style={{marginTop:'30px'}} onClick={()=>{
                        let data ={UniversityID:this.state.univerzitetID, name: this.state.facultyname, oblast:this.state.oblast}
                        axios.post('http://localhost:3001/faculty', data)
                            .then(response=>{
                                if(response===null || !response.data){
                                    alert("greska")
                                }else{
                                alert('Usao sam')
                                console.log(response.data)}
                            })
                            .catch(error=>{
                                console.log(error)
                                
                            })
                            .finally(
                                alert("kraj")
                            )
                    }}>Dodaj fakultet</button>
                </form>
            </div>
        </>
    }
}

export default DodajFakultet