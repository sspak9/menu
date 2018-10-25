import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SimpleAppBar from './components/SimpleAppBar';
import Home from './components/Home';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar homelink="/" aboutlink="/about" />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
