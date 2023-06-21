import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import PocetnaStranica from './pages/Pocetna stranica';
import Login from './pages/Login';
import Kontakt from './pages/Kontakt';
import Oplatformi from './pages/Oplatformi';
import Test from './pages/Test';
import Test2 from './pages/Test2';

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
          <Route path='/Oplatformi' Component={Oplatformi}></Route>
          <Route path='/Test' Component={Test}></Route>
          <Route path='/Test2' Component={Test2}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
