import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
};

const isPrime = (num) => {
  if (num < 4) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const gameLoopPrime = (counter, userName) => {
  let internalCounter = counter;
  const randomInt = getRandomInt(1, 100);
  const primeCheck = isPrime(randomInt);

  const userAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
  let response = '';
  let gameIsOver = false;

  if ((primeCheck && userAnswer === 'yes') || (!primeCheck && userAnswer === 'no')) {
    response = 'Correct!';
    internalCounter += 1;
  } else {
    const responseA = `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
    const responseB = `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    response = (primeCheck ? responseA : responseB);
    gameIsOver = true;
  }
  console.log(response);

  if (!gameIsOver) {
    if (internalCounter >= 3) {
      console.log(`Congratulations, ${userName}!`);
    } else gameLoopPrime(internalCounter, userName);
  }
};

export default gameLoopPrime;
