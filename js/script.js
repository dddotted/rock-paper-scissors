"use strict";

let humanScore = 0;
let computerScore = 0;

playGame();


function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  switch(random) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}


function getHumanChoice(shout = "rock, paper, scissors, shoot") {
  const humanChoice = prompt(shout);
  return humanChoice;
}


function playRound(humanChoice, computerChoice) {
  const formatHumanChoice = humanChoice.toLowerCase();
  
  if (formatHumanChoice === computerChoice) {
    playRound(getHumanChoice("It’s a tie"), getComputerChoice());
  } else {
    const humanWinFlag = ((formatHumanChoice === "rock" && computerChoice === "scissors") || (formatHumanChoice === "scissors" && computerChoice === "paper") || (formatHumanChoice === "paper" && computerChoice === "rock"));

    console.log(`You ${(humanWinFlag) ? "Win" : "Lose"}! ${humanWinFlag ? formatHumanChoice : computerChoice} beats ${humanWinFlag ? computerChoice : humanChoice}.`);
    
    if (humanWinFlag) {
      humanScore++;
    } else {
      computerScore++;
    }
  }
}


function playGame() {
  const count = 5;
  for (let i = 0; i < count; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log(`You Win. You have ${humanScore} score${humanScore > 1 ? "s" : ""}.`);
  } else {
    console.log(`You Lose. You have ${humanScore} score${humanScore > 1 ? "s" : ""}.`);
  }
}
