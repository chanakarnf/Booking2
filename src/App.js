import React, { Component } from 'react';
import './App.css';
import Booking from './Booking';
import TestPic from './TestPic';
import Finish from './Finish';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div><Booking/></div>
    </div>
  );
  }
}

export default App;
