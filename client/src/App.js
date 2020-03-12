import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Card from './components/Card/Card.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div>
        <NavBar/>
        <Card/>
        <Card/>
        <Card/>
        <Footer/>
    </div>
  );
}

export default App;