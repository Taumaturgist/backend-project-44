import readlineSync, { setDefaultOptions } from 'readline-sync';

let userName = ''; // overwrite with setUserName();

const startGame = () => {
  console.log('Welcome to Brain Games');
  setUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameLoop(0);
};

const setUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);  
};

const gameLoop = (counter) => {
  const randomInt = getRandomInt(1, 100);
  const evenCheck = randomInt % 2;
  const userAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
  let response = '';

  if ((evenCheck === 0 && userAnswer === 'yes') || (evenCheck !== 0 && userAnswer === 'no')) {
    response = 'Correct!';
    counter += 1;
  } else {
    evenCheck === 0 ? response = `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`
      : response = `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
    counter = 0;
  }
  console.log(response);

  if (counter >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else gameLoop(counter);
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default startGame;
