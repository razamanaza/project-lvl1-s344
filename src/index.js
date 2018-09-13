import readlineSync from 'readline-sync';

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

export const startGame = (getQuestion, getQuestionString, getCorrectAnswer) => {
  const username = startIntro();
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const answer = askQuestion(getQuestionString(question));
    if (answer !== getCorrectAnswer(question)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.`);
      console.log(`Let's try again, ${username}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
