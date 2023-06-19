import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import PocetnaStranica from './pages/Pocetna stranica';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={PocetnaStranica}></Route>
          <Route path='/Kontakt' exact Component={Kontakt}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
