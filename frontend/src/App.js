import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import PocetnaStranica from './pages/Pocetna stranica';
import Login from './pages/Login';
import Kontakt from './pages/Kontakt';
import Oplatformi from './pages/Oplatformi';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import Univerziteti from './pages/Univerziteti';
import Register from './pages/Register';
import Fakulteti from './pages/Fakulteti';
import FakultetskaJednicia from './pages/Fakultetske jedinice';
import TestOrijentacijePocetna from './pages/TestOrijentacijePocetna';
import RezultatiTesta from './pages/RezultatiTesta'
import Admin from './pages/Admin';
function App() {
  //let location = useLocation()
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' exact Component={PocetnaStranica}></Route>
          {localStorage.getItem('token') && <Route path='/korisnik/:userID' Component={PocetnaStranica}></Route>}
          <Route path='/Kontakt' exact Component={Kontakt}></Route>
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/kontakt' Component={Kontakt}></Route>}
          <Route path='/login' exact Component={Login}></Route>
          <Route path='/Oplatformi' Component={Oplatformi}></Route>
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/testorijentacije' Component={TestOrijentacijePocetna}></Route>}
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/testorijentacije/Test' Component={Test}></Route>}
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/testorijentacije/Test2' Component={Test2}></Route>}
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/Oplatformi' Component={Oplatformi}></Route>}
          <Route path='/univerziteti' Component={Univerziteti}></Route>
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/univerziteti' Component={Univerziteti}></Route>}
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/testorijentacije/RezultatiTesta' Component={RezultatiTesta}></Route>}
          <Route path='/registracija' Component={Register}></Route>
          <Route path='/univerziteti/:uniID/fakulteti' Component={Fakulteti}></Route>
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/univerziteti/:uniID/fakulteti' Component={Fakulteti}></Route>}
          <Route path='/univerziteti/:uniID/fakulteti/:facultyName/fakultetskejedinice' Component={FakultetskaJednicia}></Route>
          {localStorage.getItem('token') && <Route path='/korisnik/:userID/univerziteti/:uniID/fakulteti/:facultyName/fakultetskejedinice' Component={FakultetskaJednicia}></Route>}
          {localStorage.getItem('token') && <Route path='/admin' Component={Admin}></Route>}
          
      </Routes>
    </Router>
    </>
  );
}

export default App;
