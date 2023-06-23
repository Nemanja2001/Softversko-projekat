import React from "react";

class CardCommentUniversity extends React.Component{
    constructor(props){
        super(props);
        this.state={ime:props.ime, prezime:props.prezime, text:props.tekst, ocjena:props.ocjena}
    }

    render(){
        const {ime, prezime,text, ocjena} = this.state
        return(
            <div style={{display:'flex', justifyItems:'space-around', paddingLeft:'40px' }}>
                    <div style={{marginRight:'20px'}}>{ime} {prezime}:</div>
                    <div style={{flex:'3',zIndex:'2', border:'1px solid #ef4d48',marginRight:'40px', paddingLeft:'20px'}}>{text}</div>
                    <div style={{flex:'2'}}>
                        <div style={{alignSelf:'center'}}>Ocjena</div>
                        <div style={{alignSelf:'center'}}>{ocjena}</div>
                    </div>
            
            </div>
        )
    }
}

export default CardCommentUniversity