import React from 'react'
import axios from 'axios'
import Header from './../components/Header'
import Footer from './../components/Footer'
import CardListFaculty from '../components/CardListFaculty';
import { withRouter } from 'react-router-dom';
class Fakulteti extends React.Component{
    constructor(props){
        super(props);
        this.state={fakulteti:[]};
    }

    

    /*uzmi_komentare(){
        const data={};
        axios.get('http://localhost:3001/universitycomments/university/'+this.state.univerzitetID,data)
            .then(response=>{
                if(!response.data){
                    window.alert("Greska pri preuzimanju komentara");
                }else{
                    this.setState({komentari:response.data});
                }
            })
            .catch(error=>window.alert("Greška"));
    }*/

    render(){
        return (
            <div>
                <Header />
                    <CardListFaculty />
                <Footer />
            </div>
        )
    }



}

export default Fakulteti