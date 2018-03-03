import React, { Component } from 'react';
import Board from './Board.js';
import logo from './logo.svg';
import './App.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2]
      ],
      playerTurn: 0, 
      win: 0, 
    }
  }

  //functions go here

  render() {
    return (
      <div>
        board.map((row, i) => {
          <board Row/>
        })
      </div>
    );
  }
}


export default TicTacToe;
