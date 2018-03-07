import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleInputValue(e){
    //this.setState
    //needs to be fat arrow
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
        <input></input><button onClick={this.handleInputValue}>Submit</button>
      </div>
    );
  }
}

export default App;
