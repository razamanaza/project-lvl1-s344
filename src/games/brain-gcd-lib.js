import * as index from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const getQuestion = () => (cons(index.getRandom(0, 100), index.getRandom(0, 100)));

const getQuestionString = question => (`${car(question)} ${cdr(question)}`);

const getGCD = (a, b) => {
  if (a === 0 || b === 0) return a + b;
  if (a > b) return getGCD(a % b, b);
  return getGCD(a, b % a);
};

const getCorrectAnswer = question => (getGCD(car(question), cdr(question))).toString();

const getQuestionAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  const qa = cons(getQuestionString(question), correctAnswer);
  return qa;
};

export default () => {
  const greeting = 'Find the greatest common divisor of given numbers.';
  index.startGame(getQuestionAnswer, greeting);
};
