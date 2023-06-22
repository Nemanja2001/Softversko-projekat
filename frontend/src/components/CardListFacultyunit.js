import React from "react";
import CardFacultyunit from "./CardFacultyunit";
import axios from "axios";
class CardListFacultyunit extends React.Component{
    constructor(props){
        super(props);
        this.state ={rezultati:[]};
    }

    dobij_fakultetske_jedinice(){
        const data ={
            UniversityID:localStorage.getItem('UniversityID'),
            FacultyName:localStorage.getItem('faculty')
        };
        const encodedData = encodeURIComponent(JSON.stringify(data));
        const url = `http://localhost:3001/facultyunit?data=${encodedData}`;
        axios.get(url)
        .then(response=>{
            if(!response.data){
            window.alert("Greška pri preuzimanju fakultetskih jedinica");
            }else{
            this.setState({rezultati:response.data});
        }
        })
        .catch(error=>console.log(error))
    }

    render(){
        this.dobij_fakultetske_jedinice();
        let {rezultati} = this.state
        return <div>
            <div>Fakultetske jedinice</div>
            {rezultati.map(x=>
                <CardFacultyunit ime={x.Ime}/>)}
        </div>
    }

}

export default CardListFacultyunit