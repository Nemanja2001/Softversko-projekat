import React from "react";
import axios from "axios";
import CardCommentUniversity from "./CardComment";
import './Komentari.css'

class CardCommentList extends React.Component{
    constructor(props){
        super(props);
        this.state={komentari:[],ulogovan:props.ulogovan};
    }

    dobij_komentare_univerziteti(){
        axios.get('http://localhost:3001/universitycomments/university/'+localStorage.getItem('UniversityID'),[])
        .then(
            response=>{
                this.setState({komentari:response.data});
            }
        )
        .catch(error=>console.error(error))
    }
    dobij_komentare_fakultet(){
        let data = {UniversityID: localStorage.getItem('UniversityID'), CollegeName:localStorage.getItem('faculty')};
        axios.get('http://localhost:3001/facultycomments',data)
        .then(
            response=>{
                this.setState({komentari:response.data});
            }
        )
        .catch(error=>console.error(error))
    }
    render(){
        if(localStorage.getItem('facultyunit')){

        }else if (localStorage.getItem('faculty')){
            this.dobij_komentare_fakultet();
        }else{ 
            this.dobij_komentare_univerziteti();
        }
        const {komentari} = this.state
        return(
            <div className="komentari">
                <div style={{fontSize:'25px',fontStyle:'italic', fontWeight:'bold', marginBottom:'50px'}}>Rekli su o nama</div>
                
                {komentari.map((x)=>
                <CardCommentUniversity ime={x.Name} prezime={x.Surname} tekst={x.Tekst} ocjena={x.Ocjena} />)}

                {this.state.ulogovan && <button style={{marginTop:'50px'}}className="btn">Dodaj komentar</button>}

            </div>
        )
    }
}

export default CardCommentList