import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
};

const divideNumOnDenom = (num, denom) => {
  const remainder = num % denom;
  if (remainder !== 0) return divideNumOnDenom(denom, remainder);
  return denom;
};

const getGreatestCommonDivisor = (a, b) => {
  const numerator = a >= b ? a : b;
  const denominator = b < a ? b : a;
  const gcdAB = divideNumOnDenom(numerator, denominator);
  return gcdAB;
};

const gameLoopGCD = (counter, userName) => {
  let internalCounter = counter;
  const randomA = getRandomInt(1, 100);
  const randomB = getRandomInt(1, 100);
  const gcdAB = getGreatestCommonDivisor(randomA, randomB);

  const userAnswer = readlineSync.question(`Question: ${randomA} ${randomB}\nYour answer: `);

  let response = '';
  let gameIsOver = false;
  if (userAnswer === String(gcdAB)) {
    response = 'Correct!';
    internalCounter += 1;
  } else {
    response = `'${userAnswer}' is wrong answer ;(. Correct answer was '${gcdAB}'.\nLet's try again, ${userName}!`;
    gameIsOver = true;
  }
  console.log(response);

  if (!gameIsOver) {
    if (internalCounter >= 3) {
      console.log(`Congratulations, ${userName}!`);
    } else gameLoopGCD(internalCounter, userName);
  }
};

export default gameLoopGCD;
