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
            <div className="kartice" onClick={()=>{
                localStorage.setItem('faculty', name)
                if(!localStorage.getItem('token')) 
                    window.location='/univerziteti/'+localStorage.getItem('UniversityID')+'/fakulteti/'+localStorage.getItem('faculty')+'/fakultetskejedinice'
                else 
                    window.location='/korisnik/'+localStorage.getItem('username')+'/univerziteti/'+localStorage.getItem('UniversityID')+'/fakulteti/'+localStorage.getItem('faculty')+'/fakultetskejedinice'       
            
            }}>
              {name}  
            </div>
        )
    }
}

export default CardFaculty