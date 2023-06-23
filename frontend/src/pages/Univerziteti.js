import React from 'react';
import CardList from '../components/CardListUniversity';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Univerziteti extends React.Component{
  

  render(){
    if(localStorage.getItem('UniversityID')){
      localStorage.removeItem('UniversityID')
    }
    return (
      <div>
        <Header/>
        
        <div style={{ marginBottom:'90px'}} className="app" >
          <h1 style={{textAlign:'center', marginBottom:'90px'}}>Univerziteti</h1>
          <CardList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Univerziteti;
