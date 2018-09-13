import * as index from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const getQuestion = () => (cons(index.getRandom(0, 100), index.getRandom(0, 100)));

const getQuestionString = question => (`${car(question)} ${cdr(question)}`);

const getCorrectAnswerHelper = (a, b) => {
  if (a === 0 || b === 0) return a + b;
  if (a > b) return getCorrectAnswerHelper(a % b, b);
  return getCorrectAnswerHelper(a, b % a);
};

const getCorrectAnswer = question => (
  getCorrectAnswerHelper(car(question), cdr(question))).toString();


export default () => {
  index.startGame(getQuestion, getQuestionString, getCorrectAnswer);
};
