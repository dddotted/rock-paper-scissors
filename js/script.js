"use strict";

let humanScore = 0;
let computerScore = 0;

const buttonList = document.querySelector(".button-list");
const instructionText = document.querySelector(".instruction-text");
const resultText = document.querySelector(".result-text");
const defaultText = instructionText.textContent;

const CHOICES = ["rock", "paper", "scissors"];

buttonList.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button || !buttonList.contains(button)) return;

  const humanChoice = button.value;
  if (!CHOICES.includes(humanChoice)) return;

  playRound(humanChoice, getComputerChoice());

  if (humanScore === 5 || computerScore === 5) {
    finishGame();
  }
});


function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    instructionText.textContent = "It’s a tie";
    resultText.textContent = `${humanScore} VS ${computerScore}`;
  } else {
    instructionText.textContent = defaultText;
    const humanWinFlag = judgeWin(humanChoice, computerChoice);

    (humanWinFlag) ? humanScore++ : computerScore++;

    resultText.textContent = `You ${(humanWinFlag) ? "Win" : "Lose"}! ${humanWinFlag ? humanChoice : computerChoice} beats ${humanWinFlag ? computerChoice : humanChoice}. ${humanScore} VS ${computerScore}`;
  }
}


function judgeWin(humanChoice, computerChoice) {
  return (humanChoice === "rock" && computerChoice === "scissors") ||
  (humanChoice === "scissors" && computerChoice === "paper") ||
  (humanChoice === "paper" && computerChoice === "rock");
}


function finishGame() {
  const youWin = humanScore > computerScore;
  resultText.textContent = `${youWin ? "You Win." : "You Lose."} ${humanScore} VS ${computerScore}`;

  humanScore = 0;
  computerScore = 0;
}
