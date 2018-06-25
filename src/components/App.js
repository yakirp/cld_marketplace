import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AppProvider, {
  Consumer
} from './AppProvider';
import Login from './Login';
import Signup from './Signup';

import Navbar from '../shared/Navbar';
import FlashMessage from '../shared/FlashMessage';



class App extends Component {

   

  myClickFunction =() => {
    console.log('hello');

    

  }
  render() {
    return (
      <div className="App">
    
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>hi</div>
        <div>{this.myClickFunction()}</div>
      </div>
    );
  }
}

export default App;
