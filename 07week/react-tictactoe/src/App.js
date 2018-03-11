import React, { Component } from 'react';


class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [{id: 0, move: ''}, {id: 1, move: ''}, {id: 2, move: ''}],
        [{id: 3, move: ''}, {id: 4, move: ''}, {id: 5, move: ''}],
        [{id: 6, move: ''}, {id: 7, move: ''}, {id: 8, move: ''}]
      ],
      currentPlayer: 'X',
    }
  }


  //functions go here
  handleResetClick(){
    console.log('This will eventually reset game')
    
  }
  
  handlePlayClick(clickedBox, e) {
    let board = this.state.board;
    board = this.changeBoard(board, clickedBox);
    console.log(board);
    if ( !board ) {
      alert('cant move here')
    } else {
      // this.checkForWin();
      this.nextPlayer();     
    }
  }

  nextPlayer(board, clickedBox) {
    console.log('next player called')
    let player = this.state.currentPlayer;
    player = player === 'X' ? 'O' : 'X'
    this.setState({currentPlayer: player}) 
  }

  checkForWin() {
    // console.log(clickedBox.move)
    //only checking for if it has something in it, i need to check for .move values
  }


  //need to make sure that if it is an invalid move, it does not switch the player turn 

  changeBoard(board, clickedBox) {
    console.log(clickedBox)
    if ( clickedBox.move !== '' ) return false
    return board.map((row) => {
      row.map((currentBox) => {
        if(currentBox.id === clickedBox.id){
          currentBox.move = this.state.currentPlayer
          console.log(currentBox.move)
          console.log(this.state.board)
        } 
      })
    })
  }

  


  render() {
    const rowStyle = {
      height: '120px',
      fontSize: '40px',
      margin: '10px auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
      
    const boxStyle = {
      height: '110px',
      width: '110px',
      backgroundColor: 'pink',
      margin: 'auto 10px',
      border: '1px solid black', 
      textAlign: 'center', 
      fontSize: '95px'
    }

    const center = {
      textAlign: 'center',
    }

    return (
      <div>
        <h1 style={center}> Tic-Tac-Toe </h1>

        {this.state.board.map((row, index) => {
          // console.log(row)
          return <div  key={index} style={rowStyle}>
            {row.map((box, item) => {
            // console.log('this is the index', index)              
              return <div value={"test"} key={item} onClick={this.handlePlayClick.bind(this, box)} style={boxStyle}>{box.move}</div>
            })}

          </div>;
        })}
        <div style={center}>
          <h3>Current Player: {this.state.currentPlayer}</h3>
          <button onClick={this.handleResetClick}>Reset Game Board</button>
        </div>
      </div>
    );
  }
}


export default TicTacToe;
