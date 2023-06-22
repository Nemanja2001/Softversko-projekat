import React from "react";
import axios from "axios";
import Rezultat from "./CardResult";

class ListCardResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {rezultat:[]};
    }
    dobij_fakultete_po_oblasti(){
        axios.get('http://localhost:3001/faculty/oblast/'+localStorage.getItem('rezultat'))
        .then(
            response=>{
                this.setState({rezultat:response.data})
            }
        )
        .catch(error=>console.error(error));
    }

    render(){
        this.dobij_fakultete_po_oblasti();
        let { rezultat } = this.state;
        return <div>
            <div>Rezultat Vašeg testa</div>
            {rezultat.map(x=>
                <Rezultat UniversityID={x.IDUniverziteta} FacultyName={x.Ime} UniversityName={x.ImeUniverziteta}/>)}
        </div>
    }
}

export default ListCardResults