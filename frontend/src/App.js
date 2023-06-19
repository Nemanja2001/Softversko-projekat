import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import PocetnaStranica from './pages/Pocetna stranica';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={PocetnaStranica}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
