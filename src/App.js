import React, { Component } from 'react';
import Root from './Components/Root/Root';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Root />
      </div>
    );
  }
}

export default App;
