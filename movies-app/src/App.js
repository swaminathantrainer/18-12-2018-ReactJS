import React, { Component } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetailsComponent from './components/MovieDetailsComponent';

class App extends Component {
  render() {

    // while (true) { }

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={HomeComponent} />
          <Route path='/movies/:movieId' component={MovieDetailsComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
