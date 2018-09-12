import readlineSync from 'readline-sync';

export const startGame = (greeting = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  console.log();
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Mr. Smith' });
  console.log(`Hello, ${username}!`);
  return username;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return (readlineSync.question('Your answer: '));
};

export const generateNum = () => (Math.floor(Math.random() * 99 - 1));
