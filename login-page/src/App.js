import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <LoginComponent />
      </div>
    );
  }
}

export default App;
