'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const rockPaperScissors=(hand1, hand2)=>{
    const play1 = hand1.trim().toLowerCase();
    const play2 = hand2.trim().toLowerCase();
  if (play1 === play2) {
    return "It\'s a tie!";
  }else if (play1 === 'rock') {
    if(play2 === 'paper') {
      return "Hand two wins!";
    }else{
      return "Hand one wins!";
    }

  }else if(play1 === 'paper'){
    if(play2 === 'scissors') {
      return "Hand two wins!";
    }else{
      return "Hand one wins!";
    }

  }else if(play1 === 'scissors'){
    if(play2 === 'rock') {
      return "Hand two wins!";
    }else{
      return "Hand one wins!";
    }
  }else{
      return "Try inputing 'rock', 'paper', or 'scissors'";
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests
// Write new tests for Rock Paper Scissors in the javascript-workbook 02week/test.js:
// Test for all possible scenaries in which "Hand one wins!". DONE
// Test for all possible scenaries in which "Hand two wins!". DONE
// Test to make sure user must input a valid entry (e.g. 'rock', 'paper', or 'scissors')
// Think of more tests you could write and try writing them.

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should test for valid input', () => {
      assert.equal(rockPaperScissors('heyslkkf', 'fioaml'), "Try inputing 'rock', 'paper', or 'scissors'");
      assert.equal(rockPaperScissors('3948', ' '), "Try inputing 'rock', 'paper', or 'scissors'");
    });
  });
} else {

  getPrompt();

}