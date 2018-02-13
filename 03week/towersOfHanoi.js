'use strict';

//Towers Rubric
// Move piece from stack to stack (17)
// Working is legal function (17)
// Working check for win function (17)
// Working reset function (17)
// Legal Move function  (8)
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


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const isValid = (startStack, endStack) => {
  //is input a, b, or c?
  //check to see if the endStack has anything in it (stacks[endStack].length) for valid move
  //if the endStack has something in it, make sure the last item in array (.slice(-1) is greater than the item you are moving)
  if ((stacks[startStack] === 'a' || 'b' || 'c') && (stacks[endStack] === 'a' || 'b' || 'c')) {
    if ((stacks[endStack].length === 0) || (stacks[endStack].slice(-1) > stacks[startStack].slice(-1))) {
      return true;
    } else {
      return false;
    }
    return true;
  } else {
    return false;
  }
}


const movePiece = (startStack, endStack) => {
  // Pop off last item from startStack
  // Push that *returned* item to the endStack
  if(startStack === 'a') {
    if(endStack === 'b') {
      stacks.b.push(stacks.a.pop());
    } else if(endStack === 'c') {
      stacks.c.push(stacks.a.pop());
    }
  } else if (startStack === 'b') {
    if(endStack === 'a') {
      stacks.a.push(stacks.b.pop());
    } else if(endStack === 'c') {
      stacks.c.push(stacks.b.pop());     
    }
  } else if (startStack === 'c') {
    if(endStack === 'a') {
      stacks.a.push(stacks.c.pop());
    } else if(endStack === 'b') {
      stacks.b.push(stacks.c.pop());
    }
  } else {
    return false;
  }
}


//WORKING FUNCTION
const checkForWin = () => {
  // Does stacks.b || stacks.c contain [4, 3, 2, 1]? If yes, you won!
  if(stacks.b.length === 4) {
    console.log("You won on stack 'B'!");
    return true;
  } else if (stacks.c.length === 4){
    console.log("You won on stack 'C'!");
    return true;
  } else {
    return false;
  }
}


//Working, but still placing an undefined in the startStack
const towersOfHanoi = (startStack, endStack) => {
  // What is the startStack value and what is the endStack value so we can do something with it (movePiece)
  // After the move, check for win before leaving function.
  if(isValid(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    console.log("Move doesn't work, try again");
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

// getPrompt();

//Tests
// If my start stack has nothing in it, dont allow that move
// If stack.c has all items in it, you should win
// If start stack input does not equal a, b, or c, invalid input
// Should check for win

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should move the number', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { 
        a: [4, 3, 2], 
        b: [1], 
        c: [] });
    });
  });

  describe('#checkForWin()', () => {
  it('should check win in B stack', () => {
    stacks = {
      a: [],
      b: [4, 3, 2, 1],
      c: []
    };
    assert.equal(checkForWin(), true);
  });
  it('should check win in C stack', () => {
    stacks = {
      a: [],
      b: [],
      c: [4, 3, 2, 1]
    };
    assert.equal(checkForWin(), true);
  });
});
  // it('should check for illegal move', () => {
  //   stacks = {
  //     a: [4, 3, 2, 1],
  //     b: [],
  //     c: []
  //   };
  //   assert.equal(diagonalWin(), true);
  // });
} else {

  getPrompt();

}
