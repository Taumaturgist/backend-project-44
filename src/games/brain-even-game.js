import readlineSync, { setDefaultOptions } from 'readline-sync';

const gameLoopEven = (counter, userName) => {
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
  } else gameLoopEven(counter, userName);
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default gameLoopEven;
