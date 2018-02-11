'use strict';

//Towers Rubric
// Move piece from stack to stack (17)
// Working is legal function (17)
// Working check for win function (17)
// Working reset function (17)
// Legal Move function  ( 8)
// Clean PR , es6 syntax (8)
// Function plan in comments (each function has a stated purpose and method) (8)
// At least 2 tests (8)


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

let movePeg;
let popPeg;

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  // Pop off last item
  // Push that *returned* item to the end stack
  if(stacks[startStack] !== -1){
    let popPeg = stacks[startStack].pop();
    stacks[endStack].push(popPeg);
    return true;
  } else {
    console.log("failing movePiece");
    return false;
  }
}

const isLegal = (startStack, endStack) => {
  // Start stack must have an array item to pick an item up
  // End stack must have no items or an item of greater value in that space before you add item to it
  if (isValid(startStack,endStack)){

  }
}

const isValid = (startStack, endStack) => {
  //is input a, b, or c?
  if ((stacks[startStack] === 'a' || 'b' || 'c') && (stacks[endStack] === 'a' || 'b' || 'c')) {
    console.log("in isValid function");
    return true;
  } else {
    console.log("invalid function");
    return false;
  }
}


//WORKING FUNCTION
const checkForWin = () => {
  // Does stacks.b || stacks.c contain [4, 3, 2, 1]? If yes, you won!
  if(stacks.b.length === 4) {
    console.log("Stack B wins");
    return true;
  } else if (stacks.c.length === 4){
    console.log("Stack C wins");
    return true;
  } else {
    return false;
  }
}


//Working, but still placing an undefined in the startStack
const towersOfHanoi = (startStack, endStack) => {
  // What is the startStack value and what is the endStack value so we can do something with it
  // movePiece(startStack, endStack);
  // isValid(startStack, endStack);
  if(isValid(startStack, endStack)) {
    movePiece(startStack, endStack);
    if(stacks[startStack].length != -1){
      stacks[startStack][endStack] = movePeg;
      if (checkForWin()) {
        console.log("WIN!");
        stacks = {
          a: [4, 3, 2, 1],
          b: [],
          c: []
        };
        return true;
      }
    }
  } else {
    console.log("woah, hang on there");
    return false;
  }
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
