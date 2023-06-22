import React from "react";
import axios from "axios";
import CardCommentUniversity from "./CardComment";
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
                console.log(response.data)
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
                console.log(response.data)
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
            <div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{fontSize:'30px', fontWeight:'bold'}}>Rekli su o nama</div>
                    {this.state.ulogovan && <button style={{width:'150px',backgroundColor:'white',color:'red',fontWeight:'bold', borderRadius:"5px"}}>Dodaj komentar</button>}
                </div>
                {komentari.map((x)=>
                <CardCommentUniversity ime={x.Name} prezime={x.Surname} tekst={x.Tekst} ocjena={x.Ocjena} />)}
            </div>
        )
    }
}

export default CardCommentList