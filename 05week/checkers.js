'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(symbol, name) {
  this.symbol = symbol;
  this.name = name;
}

// const oh = new Checker('O', 'oh');
// const ex = new Checker('X', 'ex');

function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  // Your code here

  this.createCheckers = function () {
    const ohStart = [
      [0, 1], [0, 3], [0, 5],
      [0, 7], [1, 0], [1, 2],
      [1, 4], [1, 6], [2, 1],
      [2, 3], [2, 5], [2, 7]
    ]

    for (let i = 0; i < 12; i++) {
      let ohRow = ohPieces[i][0];
      let ohColumn = ohPieces[i][1];
      let ohChecker = new Checker('oh');
      this.checkers.push(ohChecker);
      this.grid[ohRow][ohColumn] = ohChecker;
    }

    const exStart = [
      [5, 0], [5, 2], [5, 4],
      [5, 6], [6, 1], [6, 3],
      [6, 5], [6, 7], [7, 0],
      [7, 2], [7, 4], [7, 6]
    ]

    for (let i = 0; i < 12; i++) {
      let exRow = exPieces[i][0];
      let exColumn = exPieces[i][1];
      let exChecker = new Checker('ex');
      this.checkers.push(exChecker);
      this.grid[exRow][exColumn] = exChecker;
    }

  }
}
function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
  };
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
