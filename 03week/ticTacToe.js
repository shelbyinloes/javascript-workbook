'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  // [0][0] && [0][1] && [0][2]
  // [1][0] && [1][1] && [1][2]
  // [2][0] && [2][1] && [2][2]
  if(([0][0] === "X") && ([0][1] === "X") && ([0][2] === "X")) {
    return true;
  }
}

function verticalWin() {
  // Your code here
  // [0][0] && [1][0] && [2][0]
  // [0][1] && [1][1] && [2][1]
  // [0][2] && [1][2] && [2][2]
  if(([0][0] && [1][0] && [2][0]) || ([0][1] && [1][1] && [2][1]) || ([0][2] && [1][2] && [2][2]) === playerTurn) {
    return true;
  }
}

function diagonalWin() {
  // Your code here
  // [0][0] && [1][1] && [2][2]
  // [0][2] && [1][1] && [2][0]
  if (([0][0] && [1][1] && [2][2]) || ([0][2] && [1][1] && [2][0]) === playerTurn) {
    return true;
  }
}

function checkForWin() {
  // Your code here
  if(horizontalWin() || verticalWin() || diagonalWin()){
    return "Player " + playerTurn + " wins!!";
  }
}

function ticTacToe(row, column) {
  if(board[row][column] === ' '){
    board[row][column] = playerTurn;
    if (checkForWin()) {
      console.log("You win!")
      playerTurn = "X";
    }else{
      if(playerTurn === "X"){
        playerTurn = "O";
      }else{
        playerTurn = "X";
      }
    }
  }else{
    return "Please select empty square.";
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
