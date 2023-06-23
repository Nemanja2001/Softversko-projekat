import React from 'react';
import './Card.css'
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={uniId:props.id,naziv:props.ime, text:props.text, slika:props.slika};
    }

    render(){
        const {naziv, text , slika} = this.state
        return (<div style={{marginBottom:'80px'}} className='card-container' onClick={()=>{
            localStorage.setItem('UniversityID',this.state.uniId);
            if(!localStorage.getItem('token')) 
                window.location='/univerziteti/'+localStorage.getItem('UniversityID')+'/fakulteti'
            else 
                window.location='/korisnik/'+localStorage.getItem('username')+'/univerziteti/'+localStorage.getItem('UniversityID')+'/fakulteti'       
        }}>
            <div class="image-container">
                 <img src={slika} alt='Nista'/>
            </div>
            <br/>
            <div className='card-naziv'>{naziv}</div>
            <div style={{padding:'5%'}}>{text}</div>
        </div>)
    }
}


export default Card;
