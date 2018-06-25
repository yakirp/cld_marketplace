import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation.js'
import { Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="left" src="https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_200/v1/logo/for_white_bg/cloudinary_logo_for_white_bg.png" />
        </header>
        <Route exact={true} path={'/'} component={Navigation}/>
      </div>
    );
  }
}

export default App;
