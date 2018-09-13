import * as index from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const getOperator = (num) => {
  // minus = 0
  // plus = 1
  // multiply = 2
  switch (num) {
    case 0:
      return '-';
    case 1:
      return '+';
    case 2:
      return '*';
    default:
      return undefined;
  }
};

const getQuestion = () => {
  const num1 = index.getRandom(1, 10);
  const num2 = index.getRandom(1, 10);
  const operator = getOperator(index.getRandom(0, 3));
  const question = cons(cons(num1, num2), operator);
  return question;
};

const getQuestionString = question => (`${car(car(question))} ${cdr(question)} ${cdr(car(question))}`);

const getCorrectAnswer = (question) => {
  switch (cdr(question)) {
    case '-':
      return ((car(car(question)) - cdr(car(question))).toString());
    case '+':
      return ((car(car(question)) + cdr(car(question))).toString());
    case '*':
      return ((car(car(question)) * cdr(car(question))).toString());
    default:
      return undefined;
  }
};

export default () => {
  const greeting = 'What is the result of the expression?';
  index.startGame(getQuestion, getQuestionString, getCorrectAnswer, greeting);
};
