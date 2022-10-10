import readlineSync, { setDefaultOptions } from 'readline-sync';

const gameLoopPrime = (counter, userName) => {
  const randomInt = getRandomInt(1, 100);
  const primeCheck = isPrime(randomInt);

  const userAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
  let response = '';

  if ((primeCheck && userAnswer === 'yes') || (!primeCheck && userAnswer === 'no')) {
    response = 'Correct!';
    counter += 1;
  } else {
    primeCheck ? response = `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`
      : response = `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    counter = 0;
  }
  console.log(response);

  if (counter >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else gameLoopPrime(counter, userName);
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const isPrime = (num) => {
  if (num < 4) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

export default gameLoopPrime;
