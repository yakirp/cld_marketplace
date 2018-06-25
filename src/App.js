import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation.js'
import { Route, Link} from 'react-router-dom';

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

import Navbar from './shared/Navbar';
import FlashMessage from './shared/FlashMessage';


class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <React.Fragment>
            <Navbar />
            <FlashMessage />
            <Route exact path="/" component={() => 
              <h1 className="content">Welcome, Home!</h1>} />
                <header className="App-header">
          <img className="left" src="https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_200/v1/logo/for_white_bg/cloudinary_logo_for_white_bg.png" />
       </header>
        <Route exact={true} path={'/'} component={Navigation}/>
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/signup" component={() => <Signup />} />
            <Router exact path="/dashboard" component={() => <Consumer>
              {
                ({ state }) => state.currentUser ?
                  <h1 className="content">Protected dashboard!</h1> :
                  <div className="content">
                    <h1>Access denied.</h1>
                    <p>You are not authorized to access this page.</p>
                  </div>
              }
            </Consumer>} />
            <Route exact path="/signedOut" component={() => 
              <h1 className="content">You're now signed out.</h1>} />
            <Route exact path="/accountCreated" component={() => 
              <h1 className="content">Account created. <Link to="/login">
              Proceed to Dashboard</Link></h1>} />
          </React.Fragment>
        </Router>
      </AppProvider>
    );
  }
}

export default App