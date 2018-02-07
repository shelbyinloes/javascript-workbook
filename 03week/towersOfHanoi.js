'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

console.log(stacks.a);
console.log(stacks.b);
console.log(stacks.c);

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here
  // Pop off last item
  // Push that *returned* item to the end stack
}

function isLegal() {
  // Your code here
  // Start stack must have an array item to pick an item up
  // End stack must have no items or an item of greater value in that space before you add item to it

}

function checkForWin() {
  // Your code here
  // Does stacks.c contain [4, 3, 2, 1]? If yes, you won!

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // What is the startStack value and what is the endStack value so we can do something with it

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();

//Tests
// If my start stack has nothing in it, dont allow that move
// If stack.c has all items in it, you should win 
// If start stack input does not equal a, b, or c, invalid input 
// Should check for win 


