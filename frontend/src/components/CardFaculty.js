import React from "react";
import './CardListFaculty.css'

class CardFaculty extends React.Component {
    constructor(props){
        super(props);
        this.state={name:props.ime}
    }

    render(){
        let { name }= this.state
        return (
            <div className="kartice">
              {name}  
            </div>
        )
    }
}

export default CardFaculty