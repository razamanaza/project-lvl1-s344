import * as index from '..';
import { cons } from 'hexlet-pairs';

const isPrime = (num) => {
  if (num <= 1) return false;
  const iter = (startNum, count) => {
    if (count <= 1) return true;
    if (startNum % count === 0) return false;
    return iter(startNum, count - 1);
  };
  return iter(num, Math.floor(Math.sqrt(num)));
};

const getQuestionAnswer = () => {
  const question = index.getRandom(2, 1000);
  const answer = ((isPrime(question)) ? 'yes' : 'no');
  return cons(question.toString(), answer);
};

export default () => {
  const greeting = 'Is this number prime?';
  index.startGame(getQuestionAnswer, greeting);
};
