import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import PocetnaStranica from './pages/Pocetna stranica';
import Login from './pages/Login';
import Kontakt from './pages/Kontakt';

function App() {
  //let location = useLocation()
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' exact Component={PocetnaStranica}></Route>
          <Route path='/Kontakt' exact Component={Kontakt}></Route>
          <Route path='/login' exact Component={Login}></Route>
          <Route path='/korisnik/' Component={PocetnaStranica}></Route>
          <Route path='/korisnik/kontakt' Component={Kontakt}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
