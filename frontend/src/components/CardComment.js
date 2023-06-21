import React from "react";

class CardCommentUniversity extends React.Component{
    constructor(props){
        super(props);
        this.state={ime:props.ime, prezime:props.prezime, text:props.tekst, ocjena:props.ocjena}
    }

    render(){
        const {ime, prezime,text, ocjena} = this.state
        return(
            <div>
                <div>{ime} {prezime}</div>
                <div style={{display:'flex'}}>
                    <div style={{flex:'2',zIndex:'2', border:'2px solid red'}}>{text}</div>
                    <div style={{flex:'1'}}>
                        <div style={{alignSelf:'center'}}>Ocjena</div>
                        <div style={{alignSelf:'center'}}>{ocjena}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardCommentUniversity