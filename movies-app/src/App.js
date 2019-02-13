import React, { Component } from 'react';
import './App.css';
import HomeComponent from './components.js/HomeComponent';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  render() {

    // while (true) { }

    return (
      <div className="App">
        <HomeComponent />
      </div>
    );
  }
}

export default App;
