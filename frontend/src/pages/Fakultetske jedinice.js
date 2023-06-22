import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Komentari from '../components/Komentari';
import CardListFacultyunit from '../components/CardListFacultyunit';
class FakultetskaJednicia extends React.Component{

    render(){
            return <div>
                <Header />
                <CardListFacultyunit />
                <Komentari />
                <Footer />
            </div>
    }   

}

export default FakultetskaJednicia