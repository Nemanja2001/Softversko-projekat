import React from "react";
import axios from "axios";
import CardCommentUniversity from "./CardComment";
import './Komentari.css'
import RatingStar from "./RatingStar";
class CardCommentList extends React.Component{
    constructor(props){
        super(props);
        this.state={komentari:[],ulogovan:props.ulogovan, tekst:'', ocjena:''};
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
        const encodedData = encodeURIComponent(JSON.stringify(data));
        axios.get(`http://localhost:3001/facultycomments?data=${encodedData}`)
            .then(
                response=>{
                    this.setState({komentari:response.data});
                }
            )
            .catch(error=>console.error(error))
    }

    handleStarClick(star){
        this.setState({ocjena:star})
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
                
                {!localStorage.getItem('faculty') && komentari.map((x)=>
                <CardCommentUniversity ime={x.Name} prezime={x.Surname} tekst={x.Tekst} ocjena={x.Ocjena} />)}

                
                {localStorage.getItem('faculty') && komentari.map((x)=>
                <CardCommentUniversity ime={x.Name} prezime={x.Surname} tekst={x.Tekst} ocjena={x.Ocjena} />)}

                {this.state.ulogovan && !this.state.komentari.map(x=>x.IDKorisnika).includes(parseInt(localStorage.getItem('username'),10),0) 
                    && <button style={{marginTop:'50px'}}className="btn" onClick={()=>{
                    document.getElementById('novi-komentar').style.display='block'
                }}>Dodaj komentar</button>}
                <div id="novi-komentar">
                        <div>
                            <div>
                                <label htmlFor="tekst-komentara">Unesite tekst Vašeg komenara</label>
                                <br/>
                                <input id='tekst-komentara' value={this.state.tekst} type="text" onChange={(e)=>{
                                    this.setState({tekst:e.target.value})
                                }}></input>
                                <br/>
                            </div>
                            <div>
                                <label>Ocijenite fakultet</label>
                                <br/>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                                    <RatingStar
                                    key={star}
                                    filled={star <= this.state.ocjena}
                                    onClick={() => this.handleStarClick(star)}
                                    />
                                ))}
                            </div>    
                        </div>
                        <br/>
                        <button className='btn' type="submit" value="Objavi komentar" onClick={()=>{
                        let data = {
                            UniversityID:localStorage.getItem('UniversityID'),
                            CollegeName:localStorage.getItem('faculty'),
                            UserID:localStorage.getItem('username'),
                            Text:this.state.tekst,
                            Ocjena: this.state.ocjena
                        }
                        if(!localStorage.getItem('faculty')){
                            axios.post('http://localhost:3001/universitycomments', data)
                                .then(response=>alert('Unešen komentar'))
                                .catch(error=>alert('Greška'))
                        }else{
                            axios.post('http://localhost:3001/facultycomments', data)
                                .then(response=>alert('Unešen komentar'))
                                .catch(error=>alert('Greška'))
                        }
                    }}></button>
                </div>

            </div>
        )
    }
}

export default CardCommentList