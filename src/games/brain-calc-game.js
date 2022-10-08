import readlineSync, { setDefaultOptions } from 'readline-sync';

const gameLoopCalc = (counter, userName) => {
  const randomA = getRandomInt(1, 100);
  const randomB = getRandomInt(1, 100);
  const randomOperand = getRandomOperand();

  const userAnswer = readlineSync.question(`Question: ${randomA} ${randomOperand} ${randomB}\nYour answer: `);
  const rightAnswer = eval(`${randomA} ${randomOperand} ${randomB}`);

  let response = '';

  if (Number(userAnswer) === Number(rightAnswer)) {
    response = 'Correct!';
    counter += 1;
  } else {
    response = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    counter = 0;
  }
  console.log(response);

  if (counter >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else gameLoopCalc(counter, userName);
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
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
  }
  return operand;
};

export default gameLoopCalc;
