import React, { Component } from 'react';
import NavbarPage from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'

import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import Testing from './components/Testing';

export default class App extends Component {
  render() {
    return (
      <div className="container ">
              <Router>
<NavbarPage />
<div className="pages-top">
<Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/front-end' component={FrontEnd} />
        <Route exact path='/back-end' component={BackEnd} />
        <Route exact path='/testing' component={Testing} />
      </Switch>
      </div>
</Router>
      </div>
    )
  }
}
