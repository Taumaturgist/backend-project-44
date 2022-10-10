import readlineSync, { setDefaultOptions } from 'readline-sync';

const gameLoopProgression = (counter, userName) => {
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
  if (userAnswer === String(memberCheck)) {
    response = 'Correct!';
    counter += 1;
  } else {
    response = `'${userAnswer}' is wrong answer ;(. Correct answer was '${memberCheck}'.\nLet's try again, ${userName}!`;
    counter = 0;
  }
  console.log(response);

  if (counter >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else gameLoopProgression(counter, userName);
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default gameLoopProgression;
