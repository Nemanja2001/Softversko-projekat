import React from "react";
import axios from "axios";
import CardCommentUniversity from "./CardComment";
class CardCommentList extends React.Component{
    constructor(props){
        super(props);
        this.state={komentari:[]};
    }

    dobij_komentare_univerziteti(){
        axios.get('http://localhost:3001/universitycomments/university/'+localStorage.getItem('UniversityID'),[])
        .then(
            response=>{
                this.setState({komentari:response.data});
                console.log(response.data)
            }
        )
        .catch(error=>console.error(error))
    }
    
    render(){
        if(localStorage.getItem('facultyunit')){

        }else if (localStorage.getItem('faculty')){

        }else{ 
        this.dobij_komentare_univerziteti()
        }
        const {komentari} = this.state
        return(
            <div>
                <div style={{fontSize:'30px', fontWeight:'bold'}}>Rekli su o nama</div>
                {komentari.map((x)=>
                <CardCommentUniversity ime={x.Name} prezime={x.Surname} tekst={x.Tekst} ocjena={x.Ocjena} />)}
            </div>
        )
    }


}

export default CardCommentList