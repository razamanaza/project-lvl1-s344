import * as index from '..';

const correctAnswer = num => ((num % 2 === 0) ? 'yes' : 'no');

const username = index.startGame('Answer "yes" if number even otherwise answer "no".');

export default () => {
  let finalGreet = 'Congratulations,';
  for (let i = 0; i < 3; i += 1) {
    const question = index.getRandom(1, 100);
    const answer = index.askQuestion(question);
    if (answer !== correctAnswer(question)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'.`);
      finalGreet = "Let's try again,";
      break;
    }
    console.log('Correct!');
  }

  console.log(`${finalGreet} ${username}!`);
};
