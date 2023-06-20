import React from 'react';
import './Card.css'
import { useLocation } from 'react-router-dom';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={id:props.id,naziv:props.ime, text:props.text};
    }
    fun(id) {
        window.location='/univerziteti/'+id+'/fakulteti'
    }
    location = useLocation()
    render(){
        const {id, naziv, text } = this.state
        return<div className='card-container' onClick={()=>{
                                                        if(!this.location.pathname.includes('korisnik')) window.location='/univerziteti/'+id+'/fakulteti'
                                                        else window.location='/korisnik/:userid/univerziteti/'+id+'/fakulteti'
                                                        }}>
            <div className='card-naziv' id="ime_univerziteta">{naziv}</div>
            <div style={{padding:'5%'}}>{text}</div>
        </div>
    }
}


export default Card;
