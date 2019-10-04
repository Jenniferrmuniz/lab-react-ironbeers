import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='navbar'><Link to={'/'}>Home <FontAwesomeIcon icon={faHome} color="white"/></Link></nav>
        <Home/>
        <Switch>
          <Route exact path='/all'/>
          <Route exact path='/random'/>
          <Route exact path='/new'/>
        </Switch>

      
      </div>
    );
  }
}

export default App;
