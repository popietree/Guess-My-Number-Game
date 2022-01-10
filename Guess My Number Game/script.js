'use strict';

//input is string, so will have to convert to number to compare with random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//function that will take a meassage to be printed as an argument to display the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//handler fucntion: when click on check button, start game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //for testing
  console.log(secretNumber);
  console.log(score);

  // if the guess input is '' number, then guess will become falsy (0 is falsy) !(negation)guess is true.
  if (!guess) {
    displayMessage('No number !');
    //when player wins and not when score is zero, because when player wins, you cant guess again
  } else if (
    guess === secretNumber &&
    Number(document.querySelector('.score').textContent) !== 0
  ) {
    //what to do when correct answer
    //show secret answer
    document.querySelector('.number').textContent = secretNumber;
    //print correct number
    displayMessage('Correct number !');
    //set image to celecration tree
    document.querySelector('body').style.backgroundImage = "url('tree.jpg')";
    //setting the styles to contrast black
    document.querySelector('.message').style.color = 'black';
    document.querySelector('.label-score').style.color = 'black';
    document.querySelector('.label-highscore').style.color = 'black';
    document.querySelector('.guess').style.border = '4px solid black';
    document.querySelector('.guess').style.color = 'black';
    document.querySelector('h1').style.color = 'grey';
    //change the hover button to green
    //add event listener for on mouse and mouse out.
    document.querySelector('.check').addEventListener('mouseout', function () {
      document.querySelector('.btn.check').style.backgroundColor = '#eee';
    });
    document.querySelector('.check').addEventListener('mouseover', function () {
      document.querySelector('.btn.check').style.backgroundColor = 'green';
    });
    // keep track of highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //update highscore
    document.querySelector('.highscore').textContent = highscore;
    //if the game is over and you guess right
  } else if (
    Number(document.querySelector('.score').textContent) === 0 &&
    guess === secretNumber
  ) {
    displayMessage('Good guess!');
    //when guess is different than secret number/ wrong because too low or too high, but not after game is won
  } else if (
    guess !== secretNumber &&
    document.querySelector('.message').textContent != 'Correct number !'
  ) {
    // if not right answer was found, and score is not down to 0, where the player would have no more points to subtract
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(`${guess > secretNumber ? 'Too high !' : 'Too low!'}`);
      // if not right answer was found before points reduced to 0
    } else {
      displayMessage('You lost ! Try Again !');
      // setting the score to zero or else the score will keep subtracting if guess is still too high
      document.querySelector('.score').textContent = 0;
    }
  }
});

//challnege crate again event handler adn add handler function with is anynomous because does not have name
//fucntion called when 'click' happens
document.querySelector('.again').addEventListener('click', function () {
  //console.log('e');

  //setting score back to 20
  score = 20;
  document.querySelector('.score').textContent = score;
  //setting new random value, but is const
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //restore inital condition of Message number
  displayMessage('Start guessing...🔮');
  // restore intial condition of number
  document.querySelector('.guess').value = '';
  //restore question number
  document.querySelector('.number').textContent = '?';
  //restore background
  document.querySelector('body').style.backgroundImage = "url('clouds.jpg')";
  document.querySelector('.message').style.color = 'white';
  document.querySelector('.label-score').style.color = 'white';
  document.querySelector('.label-highscore').style.color = 'white';
  document.querySelector('.guess').style.border = '4px solid white';
  document.querySelector('.guess').style.color = 'white';
  document.querySelector('h1').style.color = 'white';
  //
  document.querySelector('.check').addEventListener('mouseout', function () {
    document.querySelector('.btn.check').style.backgroundColor = '#eee';
  });

  document.querySelector('.check').addEventListener('mouseover', function () {
    // console.log('hi');
    document.querySelector('.btn.check').style.backgroundColor =
      'rgb(204, 204, 204)';
  });
});
