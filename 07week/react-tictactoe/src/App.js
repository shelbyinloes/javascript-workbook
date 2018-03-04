import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      backgroundColor: 'pink',
      color: 'red',
      height: '120px',
      fontSize: '40px',
      margin: '5px auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
      
    const boxStyle = {
      height: '110px',
      width: '110px',
      backgroundColor: 'pink',
      margin: 'auto 20px',
      border: '1px solid black'
    }

    return (
      <div>
        {this.state.board.map((row, index) => {
          return <div key={index} style={rowStyle}>

            {row.map((box, item) => {
              return <div onClick={handleClick} key={item} style={boxStyle}>{row[item]}</div>
            })}

          </div>;
        })}
      </div>
    );
  }
}


export default TicTacToe;
