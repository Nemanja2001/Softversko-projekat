import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import CardListFaculty from '../components/CardListFaculty';
import Komentari from '../components/Komentari';
class Fakulteti extends React.Component{
    constructor(props){
        super(props);
        this.state={fakulteti:[]};
    }

    render(){
        if(localStorage.getItem('faculty')){
            localStorage.removeItem('faculty');
        }
        return (
            <div>
                <Header />
                    <CardListFaculty />
                    <Komentari />
                <Footer />
            </div>
        )
    }



}

export default Fakulteti