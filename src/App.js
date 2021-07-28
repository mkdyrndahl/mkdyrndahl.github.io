import './App.css';
import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Callout from './Components/Callout/Callout'
import CallToAction from './Components/CallToAction/CallToAction'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  return (
    <div className="App" id="root">
        <Nav/>
        <Header/>
        <About/>
        <Services/>
        <Callout/>
        <Portfolio/>
        <CallToAction/>
        <Footer/>
    </div>
  );
}

export default App;
