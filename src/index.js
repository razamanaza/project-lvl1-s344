import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

export const getRandom = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

export const startIntro = (greeting = '') => {
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

// Надеюсь правильно понял замечания. По другому реализацию придумать не могу.
export const startGame = (getQuestionAnswer, greeting) => {
  const username = startIntro(greeting);
  for (let i = 0; i < 3; i += 1) {
    const qa = getQuestionAnswer();
    const question = car(qa);
    const userAnswer = askQuestion(question);
    const correctAnswer = cdr(qa);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
