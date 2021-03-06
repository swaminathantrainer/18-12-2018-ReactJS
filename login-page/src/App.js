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
        <div style={{
          position: 'relative',
          margin: 'auto',
          width: '90%',
          height: '100%',
          overflow: 'scroll'
        }}>
          <HomeComponent />
        </div>
      </div>
    );
  }
}

export default App;
