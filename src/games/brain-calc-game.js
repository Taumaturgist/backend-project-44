import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
};

const getRandomOperand = () => {
  let operand = '';
  const num = getRandomInt(0, 3);

  switch (num) {
    case 0:
      operand = '+';
      break;
    case 1:
      operand = '-';
      break;
    case 2:
      operand = '*';
      break;
    default:
      break;
  }
  return operand;
};

const gameLoopCalc = (counter, userName) => {
  let internalCounter = counter;
  const randomA = getRandomInt(1, 100);
  const randomB = getRandomInt(1, 100);
  const randomOperand = getRandomOperand();

  const userAnswer = readlineSync.question(`Question: ${randomA} ${randomOperand} ${randomB}\nYour answer: `);
  let rightAnswer = 0;
  switch (randomOperand) {
    case '+':
      rightAnswer = randomA + randomB;
      break;
    case '-':
      rightAnswer = randomA - randomB;
      break;
    case '*':
      rightAnswer = randomA * randomB;
      break;
    default:
      break;
  }

  let response = '';
  let gameIsOver = false;

  if (Number(userAnswer) === rightAnswer) {
    response = 'Correct!';
    internalCounter += 1;
  } else {
    response = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    gameIsOver = true;
  }
  console.log(response);

  if (!gameIsOver) {
    if (internalCounter >= 3) {
      console.log(`Congratulations, ${userName}!`);
    } else gameLoopCalc(internalCounter, userName);
  }
};

export default gameLoopCalc;
