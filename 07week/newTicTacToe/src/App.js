import React, { Component } from 'react';
import './App.css';
import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile';



class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ], 
      turn: 'X', 
      winner: null
    }
  }

  //checks valid move, places play on the board, and checks for win
  updateBoard(loc, player) {
    //valid move
    if(this.state.gameBoard[loc] === 'X' || this.state.gameBoard[loc] === 'O' || this.state.winner){
      //invalid move
      return;
    }

    //update the state with current move
    const currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc, 1, this.state.turn);
    this.setState({gameBoard: currentGameBoard});

    //horizontal, vertical, & diagonal wins
    const topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
    if(topRow.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    const middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
    if(middleRow.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    const bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
    if(bottomRow.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    const leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
    if(leftCol.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    const middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
    if(middleCol.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    const rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
    if(rightCol.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    const rightDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
    if(rightDiag.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    const leftDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
    if(leftDiag.match(/XXX|OOO/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    //checks for draw/full board
    const moves = this.state.gameBoard.join('').replace(/ /g, '');
    if(moves.length === 9) {
      alert("Draw game! Try again.")
      // this.setState({winner: 'draw'});
    }

    //change players
    this.setState({turn: (this.state.turn === 'X') ? 'O' : 'X'})
  }

  //takes game back to original state
  resetBoard() {
    this.setState({
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ], 
      turn: 'X', 
      winner: null
    })
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Announcement winner={this.state.winner}/>
          <ResetButton reset={this.resetBoard.bind(this)} />
        </div>
          {this.state.gameBoard.map(function(value, i){
            return(
              <Tile 
                key={i}
                loc={i}
                value={value}
                updateBoard={this.updateBoard.bind(this)}
                turn={this.state.turn}
              />
            )
          }.bind(this))}
      </div>
    );
  }
}

export default App;
