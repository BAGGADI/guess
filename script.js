'use strict';
let modal=document.querySelector('.modal')
let secretNumber = Math.trunc(Math.random() * 20) + 1; //radnom secret number
let score = 20;
let highscore = 0;
const gameColor=document.querySelector('.game-wrapper')
let circle=document.querySelector('.hidden-number-wrapper-inner')
const displayMessage = function (message) {
  document.querySelector('.feedback-label').textContent = message;
};
document.querySelector('.score').textContent = 20;
displayMessage('pick a number between 1 and 20')
document.querySelector('.play').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');

  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.hidden-number-label').textContent = secretNumber;
    circle.style.border=" 1rem solid lime"
   
   


    if (score > highscore) {
      highscore = score;
      document.querySelector('.high-score').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {

      setTimeout(function(){ 
        document.querySelector('.hidden-number-label').textContent ='?'
        circle.style.border=" 1rem solid #1d293b"
    },200) 
      circle.style.border=" 1rem solid red"
      document.querySelector('.hidden-number-label').textContent =' X'
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      modal.classList.add('active');

    }
  }

});

document.querySelector('.new').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.hidden-number-label').textContent = '?';
  document.querySelector('.guess').value = '';
  gameColor.style.backgroundColor ='#101829'
   
  circle.style.border=" 1rem solid #5bb1fc"
});
document.querySelector('.retry').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.hidden-number-label').textContent = '?';
  document.querySelector('.guess').value = '';
  modal.classList.remove('active');


});
