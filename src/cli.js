import readlineSync, { setDefaultOptions } from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  //getUserName();
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greet;
// const name = readlineSync.question('Your answer: ');
