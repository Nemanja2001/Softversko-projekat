import React from 'react';
import './Card.css'
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={uniId:props.id,naziv:props.ime, text:props.text};
    }

    
    render(){
        if(localStorage.getItem('UniversityID')){
            localStorage.removeItem('UniversityID');
        }
        const {uniId, naziv, text } = this.state
        return (<div className='card-container' onClick={()=>{
                localStorage.setItem('UniversityID',uniId);
                if(!localStorage.getItem('token')) window.location='/univerziteti/'+localStorage.getItem('UniversityID')+'/fakulteti'
                else window.location='/korisnik/'+localStorage.getItem('username')+'/univerziteti/'+localStorage.getItem('UniversityID')+'/fakulteti'
                }}>
            <div className='card-naziv' id="ime_univerziteta">{naziv}</div>
            <div style={{padding:'5%'}}>{text}</div>
        </div>)
    }
}


export default Card;
