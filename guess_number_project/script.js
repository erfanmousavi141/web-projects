"use strict";

let answer = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const again = () => {
  answer = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("span.score").textContent = score;
  document.querySelector("span.highscore").textContent = highScore;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.width = "15rem";
  document.querySelector("input.guess").value = null;
};

const setValues = (_message = null, _score=null, _highScore=null, _number=null, body) => {};

const check = () => {
  let inputElement = document.querySelector("input.guess");
  let inputValue = Number(inputElement.value);
  if (!inputValue) {
    document.querySelector(".message").textContent = "No number!";
  } else if (inputValue === answer) {
    document.querySelector(".number").textContent = String(answer);
    score > highScore ? (highScore = score) : null;
    document.querySelector("span.highscore").textContent = highScore;
    document.querySelector(".message").textContent = "Correct!";
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else {
    if (score > 1) {
      score--;
      document.querySelector("span.score").textContent = score;
      if (inputValue > answer) {
        document.querySelector(".message").textContent = "Guess lower.";
      } else {
        document.querySelector(".message").textContent = "Guess higher.";
      }
    } else {
      document.querySelector(".message").textContent = "You lost...!";
    }
  }
};

const checkButton = document.querySelector("button.check.btn");
const againButton = document.querySelector("button.again.btn");
checkButton.addEventListener("click", check);
againButton.addEventListener("click", again);
