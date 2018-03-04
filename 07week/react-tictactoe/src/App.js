import React, { Component } from 'react';


class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    }
  }

  //functions go here

  render() {
    const rowStyle = {
      color: 'red',
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
      border: '1px solid black'
    }

    const center = {
      textAlign: 'center',
    }

    return (
      <div>
        <h1 style={center}> Tic-Tac-Toe </h1>

        {this.state.board.map((row, index) => {
          return <div key={index} style={rowStyle}>

            {row.map((box, item) => {
              return <div key={item} style={boxStyle}>{row[item]}</div>
            })}

          </div>;
        })}
        <div style={center}>
          <button>Reset Game Board</button>
        </div>
      </div>
    );
  }
}


export default TicTacToe;
