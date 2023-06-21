import React from "react";
import CardFaculty from "./CardFaculty";
import axios from "axios";
import { useParams } from "react-router-dom";
import './CardListFaculty.css'
class CardListFaculty extends React.Component{
    constructor(props){
        super(props);
        this.state={rezultati:[]};
    }
    uzmi_fakultete(){
        const data = {};
        axios.get('http://localhost:3001/faculty/university/'+localStorage.getItem('UniversityID'),data)
            .then(response=>{
                if(!response.data){
                    window.alert("Greška pri preuzimanji fakulteta");
                }else{
                    this.setState({rezultati:response.data});
                }
            })
            .catch(error=> window.alert("Greška"));
    }
    render(){
        
        this.uzmi_fakultete()
        return(
            <div className="div-flex-cards">
                <div className="fakulteti">Fakulteti</div>
                {this.state.rezultati.map((x)=>
                <CardFaculty ime={x.Ime}/>
                )}
            </div>
        )
    }
}

export default CardListFaculty