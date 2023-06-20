'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent  = ' 🎉 Correct Number!';
// document.querySelector('.score').textContent = 13 ;
// document.querySelector('.number').textContent = 50 ;
// console.log(document.querySelector('.guess').value);
// const guessNumber = Number(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let scoreD = document.querySelector('.score').value;
let score = 20;
document.querySelector('.check').addEventListener('click', e => {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);
  let highscore = document.querySelector('.highscore').value;
  let message = document.querySelector('.message').textContent;
  //   for (let i = 0; i > 20; i++) {
  //   do {
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.highscore').textContent = score;
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ less';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (score < 20) {
      document.querySelector('.message').textContent = '⬆️ more';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guessNumber > 20 || guessNumber  <= 0 ) {
    document.querySelector('.message').textContent = '❌ OUT OF RANGE';
    score--;
    document.querySelector('.score').textContent = score;
  }
  //  else if (guessNumber  < 0) {
  //   document.querySelector('.message').textContent = '❌ OUT OF RANGE';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }

  //   } while (guessNumber === secretNumber);
});
