import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  handleInputValue(e){
    //this.setState
    //needs to be fat arrow
  }
  

  render() { 

    const style = {
      margin: 12,
    };
    
    const RaisedButtonExampleSimple = () => (
      <div>
        <RaisedButton label="Submit" primary={true} style={style} />
      </div>
    );

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <input></input><button onClick={this.handleInputValue}>Submit</button>
          {RaisedButtonExampleSimple()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
