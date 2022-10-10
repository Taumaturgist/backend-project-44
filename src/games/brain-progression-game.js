import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
};

const gameLoopProgression = (counter, userName) => {
  let internalCounter = counter;
  const progrInit = getRandomInt(2, 21);
  const progrAmount = getRandomInt(7, 14);
  const progrStep = getRandomInt(2, 6);
  const progression = [];

  for (let i = 0; i < progrAmount; i += 1) {
    const progrMember = progrInit + i * progrStep;
    progression.push(progrMember);
  }

  const plug = '..';
  const randomProgrMemberIndex = getRandomInt(0, progrAmount - 1);
  const memberCheck = progression[randomProgrMemberIndex];
  progression[randomProgrMemberIndex] = plug;
  let progressionStr = '';
  for (let i = 0; i < progression.length; i += 1) {
    progressionStr += `${progression[i]} `;
  }

  const userAnswer = readlineSync.question(`Question: ${progressionStr}\nYour answer: `);

  let response = '';
  let gameIsOver = false;
  if (userAnswer === String(memberCheck)) {
    response = 'Correct!';
    internalCounter += 1;
  } else {
    response = `'${userAnswer}' is wrong answer ;(. Correct answer was '${memberCheck}'.\nLet's try again, ${userName}!`;
    gameIsOver = true;
  }
  console.log(response);

  if (!gameIsOver) {
    if (internalCounter >= 3) {
      console.log(`Congratulations, ${userName}!`);
    } else gameLoopProgression(internalCounter, userName);
  }
};

export default gameLoopProgression;
