import React from 'react';
import './Card.css'
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={naziv:props.ime, text:props.text};
    }

    render(){
        const { naziv, text } = this.state
        return<div className='card-container'>
            <div className='card-naziv'>{naziv}</div>
            <div style={{padding:'5%'}}>{text}</div>
        </div>
    }
}


export default Card;
