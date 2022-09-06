'use strict';
// this is for getting random numbers.
const num = Math.trunc(Math.random() * 20) + 1;
// this is the score variable which is use to reduce after every wrong attempt.
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// this is for the click we made to check the number is correct or not.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🤨No Number!');

    // When player wins.
  } else if (guess === num) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // this one is for checking tooh high  and too low parameters and also changing score.
  } else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? '📈 Too high!' : '📉Too low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤯 You lost the game.');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// this is for again button.
document.querySelector('.again').addEventListener('click', function () {
  const num = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  displayMessage('🤓Start guessing');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
