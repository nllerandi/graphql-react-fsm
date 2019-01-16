import React, { Component } from 'react';
import './App.css';

import Nav from "./components/nav/nav"
import Homepage from './components/homepage/homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Homepage/>
      </div>
    );
  }
}

export default App;
