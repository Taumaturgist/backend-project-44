import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const greet = () => {
  console.log('Welcome to the Brain Games!');
  getUserName();
};

export default greet;
// const name = readlineSync.question('Your answer: ');
