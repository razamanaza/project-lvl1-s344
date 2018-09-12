import * as index from '..';

const correctAnswer = num => ((num % 2 === 0) ? 'yes' : 'no');

const generateNum = () => (Math.floor(Math.random() * 99 - 1));


const username = index.startGame('Answer "yes" if number even otherwise answer "no".');

export default () => {
  let finalGreet = 'Congratulations,';
  for (let i = 0; i < 3; i += 1) {
    const question = generateNum();
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
