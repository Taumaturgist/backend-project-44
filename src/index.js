import readlineSync from 'readline-sync';
import gameLoopEven from './games/brain-even-game.js';
import gameLoopCalc from './games/brain-calc-game.js';
import gameLoopGCD from './games/brain-gcd-game.js';
import gameLoopProgression from './games/brain-progression-game.js';
import gameLoopPrime from './games/brain-prime-game.js';

let userName = ''; // overwrite with setUserName();

// gameNum: 0 - brain-even; 1 - brain-calc; 2 - brain-gcd; 3 - brain-progression; 4 - brain-prime
const setUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const introduceRulesAndLaunch = (gameNum) => {
  switch (gameNum) {
    case 0:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      gameLoopEven(0, userName);
      break;
    case 1:
      console.log('What is the result of the expression?');
      gameLoopCalc(0, userName);
      break;
    case 2:
      console.log('Find the greatest common divisor of given numbers.');
      gameLoopGCD(0, userName);
      break;
    case 3:
      console.log('What number is missing in the progression?');
      gameLoopProgression(0, userName);
      break;
    case 4:
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      gameLoopPrime(0, userName);
      break;
    default:
      break;
  }
};

const startGame = (gameNum) => {
  console.log('Welcome to the Brain Games');
  setUserName();
  introduceRulesAndLaunch(gameNum);
};

export default startGame;
