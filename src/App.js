import React from 'react';
import logo from './Tesla.jpg';
import './App.css';
import Tesla from "./Tesla"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://www.tesla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Tesla
        </a>
      </header>
      <Tesla/>>
    </div>
  );
}

export default App;
