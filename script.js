'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent  = ' 🎉 Correct Number!';
// document.querySelector('.score').textContent = 13 ;
// document.querySelector('.number').textContent = 50 ;()
// console.log(document.querySelector('.guess').value);
// const guessNumber = Number(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreD = document.querySelector('.score').value;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', e => {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);
  let highScore = document.querySelector('.highscore').value;
  let message = document.querySelector('.message').textContent;
  //   for (let i = 0; i > 20; i++) {
  //   do {
  if (!guessNumber) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  } else if (guessNumber === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor ='#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } 
  } else if( guessNumber !== secretNumber){
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guessNumber < secretNumber? '⬇️ Too Low!': '⬆️ Too High!';
      displayMessage(      guessNumber < secretNumber? '⬇️ Too Low!': '⬆️ Too High!' );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
    }
  } 
  // else if (guessNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬇️ Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //   }
  // } else if (guessNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬆️ Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //   }
  // }
  document.querySelector('.again').addEventListener('click', e=>{
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'start guessing ...'
    displayMessage('start guessing ...');
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value= ' ';

  });
  // } else if (guessNumber < 20 && guessNumber > 0) {
  //   document.querySelector('.message').textContent = 'OUT OF RANGE';
  // } else if( guessNumber >0) {
  //   document.querySelector('.message').textContent = 'OUT OF RANGE';

  // }

  //   } while (guessNumber === secretNumber);
});
