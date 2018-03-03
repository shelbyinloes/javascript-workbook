import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    
  }

  //board = [
  //   [0, 1, 2], 
  //   [3, 4, 5],
  //   [6, 7, 8],
  // ];

  // board[2][0] is same as spot 6 

  //const [ zero, one, two, ...board] = this.state.board

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0">0</div>
          <div data-cell="1">0</div>
          <div data-cell="2">0</div>
        </div>
        <div className="row">
          <div data-cell="3">0</div>
          <div data-cell="4">0</div>
          <div data-cell="5">0</div>
        </div>
        <div className="row">
          <div data-cell="6">0</div>
          <div data-cell="7">0</div>
          <div data-cell="8">0</div>
        </div>
      </div>
    );
  }
}


export default TicTacToe;
