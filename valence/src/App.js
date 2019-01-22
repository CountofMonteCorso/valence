import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="animate-area">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Valence.
          </p>
          <a
            className="App-link"
            href="https://www.maxmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MaxMedia
          </a>
        </header>
      </div>
    );
  }
}

export default App;
