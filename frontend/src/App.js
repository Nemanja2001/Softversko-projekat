import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import PocetnaStranica from './pages/Pocetna stranica';
import Login from './pages/Login';
import Kontakt from './pages/Kontakt';
import Oplatformi from './pages/Oplatformi';
import Univerziteti from './pages/Univerziteti';

function App() {
  //let location = useLocation()
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' exact Component={PocetnaStranica}></Route>
          <Route path='/korisnik/:userID' Component={PocetnaStranica}></Route>
          <Route path='/Kontakt' exact Component={Kontakt}></Route>
          <Route path='/korisnik/:userID/kontakt' Component={Kontakt}></Route>
          <Route path='/login' exact Component={Login}></Route>
          <Route path='/korisnik/:userID' Component={PocetnaStranica}></Route>
          <Route path='/Oplatformi' Component={Oplatformi}></Route>
          <Route path='/korisnik/:userID/Oplatformi' Component={Oplatformi}></Route>
          <Route path='/univerziteti' Component={Univerziteti}></Route>
          <Route path='/korisnik/:userID/univerziteti' Component={Univerziteti}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
