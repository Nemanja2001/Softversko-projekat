import React from 'react';
import CardList from '../components/CardListUniversity';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Univerziteti = () => {
  return (<div>
    <Header/>
    <div className="app">
      <h1 style={{textAlign:'center'}}>Univerziteti</h1>
      <CardList />
    </div>
    <Footer/>
    </div>
  );
};

export default Univerziteti;
