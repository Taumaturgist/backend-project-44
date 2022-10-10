import readlineSync, { setDefaultOptions } from 'readline-sync';

const gameLoopGCD = (counter, userName) => {
  const randomA = getRandomInt(1, 100);
  const randomB = getRandomInt(1, 100);
  const gcdAB = getGreatestCommonDivisor(randomA, randomB);

  const userAnswer = readlineSync.question(`Question: ${randomA} ${randomB}\nYour answer: `);

  let response = '';
  if (userAnswer === String(gcdAB)) {
    response = 'Correct!';
    counter += 1;
  } else {
    response = `'${userAnswer}' is wrong answer ;(. Correct answer was '${gcdAB}'.\nLet's try again, ${userName}!`;
    counter = 0;
  }
  console.log(response);

  if (counter >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else gameLoopGCD(counter, userName);
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getGreatestCommonDivisor = (a, b) => {
  const numerator = a >= b ? a : b;
  const denominator = b < a ? b : a;
  const gcdAB = divideNumOnDenom(numerator, denominator);
  return gcdAB;
};

const divideNumOnDenom = (num, denom) => {
  const remainder = num % denom;
  if (remainder !== 0) return divideNumOnDenom(denom, remainder);
  return denom;
};

export default gameLoopGCD;
