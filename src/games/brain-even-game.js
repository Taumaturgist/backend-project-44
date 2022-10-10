import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
};

// this line fails linter check because of having length of 115 (max 100 is allowed)
// const getRandomInt = (min, max) =>
// Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));

const gameLoopEven = (counter, userName) => {
  let internalCounter = counter;
  const randomInt = getRandomInt(1, 100);
  const evenCheck = randomInt % 2;
  const userAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
  let response = '';
  let gameIsOver = false;

  if ((evenCheck === 0 && userAnswer === 'yes') || (evenCheck !== 0 && userAnswer === 'no')) {
    response = 'Correct!';
    internalCounter += 1;
  } else {
    const responseA = `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
    const responseB = `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    response = (evenCheck === 0 ? responseA : responseB);
    gameIsOver = true;
  }
  console.log(response);

  if (!gameIsOver) {
    if (internalCounter >= 3) {
      console.log(`Congratulations, ${userName}!`);
    } else gameLoopEven(internalCounter, userName);
  }
};

export default gameLoopEven;
