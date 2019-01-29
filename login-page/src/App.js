import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import LogoComponent from './components/LogoComponent';
import HomeComponent from './components/HomeComponent';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <LogoComponent />
        <HomeComponent />
      </div>
    );
  }
}

export default App;
