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

//How to access stacks:
  // stacks.a

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here
  // Pop last item from the start stack and place it in the end stack (if the move isLegal()).

}

function isLegal() {
  // Your code here
  // Is the block you just picked up smaller than the stack you are trying to move it to?
  // Is there anything in the stack you are trying to pick from?
  // Is startStack (stack.a.length > -1) valid?
}

function checkForWin() {
  // Your code here
  // Stack 'c' must be '4,3,2,1'

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // If move isLegal(), then movePiece(). After that, checkForWin().

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


