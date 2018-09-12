import * as index from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const username = index.startGame('What is the result of the expression?');
const plus = 0;
const minus = 1;
// multiply = 2;

const getQA = (pair, operation) => {
  switch (operation) {
    case plus:
      return (cons(`${car(pair)} + ${cdr(pair)}`, (car(pair) + cdr(pair)).toString()));
    case minus:
      return (cons(`${car(pair)} - ${cdr(pair)}`, (car(pair) - cdr(pair)).toString()));
    default:
      return (cons(`${car(pair)} * ${cdr(pair)}`, (car(pair) * cdr(pair)).toString()));
  }
};

export default () => {
  let finalGreet = 'Congratulations,';
  for (let i = 0; i < 3; i += 1) {
    const pair = cons(index.getRandom(1, 10), index.getRandom(1, 10));
    const operation = index.getRandom(0, 3);
    const question = car(getQA(pair, operation));
    const answer = index.askQuestion(question);
    if (answer !== cdr(getQA(pair, operation))) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(getQA(pair, operation))}'.`);
      finalGreet = "Let's try again,";
      break;
    }
    console.log('Correct!');
  }

  console.log(`${finalGreet} ${username}!`);
};
