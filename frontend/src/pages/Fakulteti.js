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
                    <div style={{ marginBottom:'90px'}} >
                        <CardListFaculty />
                        <p className="line"></p>
                        <Komentari />
                    </div>
                <Footer />
            </div>
        )
    }



}

export default Fakulteti