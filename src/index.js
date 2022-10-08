import readlineSync, { setDefaultOptions } from 'readline-sync';
import gameLoopEven from './games/brain-even-game.js';
import gameLoopCalc from './games/brain-calc-game.js';

let userName = ''; // overwrite with setUserName();

// gameNum: 0 - brain-even; 1 - brain-calc
const startGame = (gameNum) => {
  console.log('Welcome to Brain Games');
  setUserName();
  introduceRulesAndLaunch(gameNum);
};

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
  }
};

export default startGame;
