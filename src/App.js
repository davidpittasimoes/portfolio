import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import PortfolioData from './PortfolioData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header portfolioData={PortfolioData}/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </div>
    );
  }
}

export default App;
