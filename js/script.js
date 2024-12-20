"use strict";

const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice(shout = "rock, paper, scissors, shoot") {
  const input = prompt(shout);
  const humanChoice = (typeof input === 'string') ? input.toLowerCase() : input;
  if (choice.indexOf(humanChoice) === -1) {
    getHumanChoice();
  } else {
    return humanChoice;
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice === computerChoice) {
    playRound(getHumanChoice("It’s a tie"), getComputerChoice());
  } else {
    const humanWinFlag = ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'rock'));

    console.log(`You ${(humanWinFlag) ? 'Win' : 'Lose'}! ${humanWinFlag ? humanChoice : computerChoice} beats ${humanWinFlag ? computerChoice : humanChoice}.`);
    return (humanWinFlag);
  }
}



//  playRoundを5回繰り返す
// コンソールに勝者と得点を表示する
function playGame() {
  const count = 5;
  let score;
  // for (let i = 0; i < count; i++) {
  //   score += playRound(getHumanChoice(), getComputerChoice());
  //   console.log(score);
  // }
}

playGame();
