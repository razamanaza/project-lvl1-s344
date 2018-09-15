import * as index from '..';
import { cons } from 'hexlet-pairs';

const getSum = (numStr, count, sum) => {
  if (count <= 0) return sum;
  return getSum(numStr.slice(0, -1), count - 1, sum + Number(numStr[numStr.length - 1]));
};

const getBalancedNum = (num) => {
  const numDigits = num.toString().length;
  const numSum = getSum(num.toString(), numDigits, 0);
  const min = Math.floor(numSum / numDigits);
  const max = min + 1;
  const maxDigits = numSum - min * numDigits;
  const minDigits = numDigits - maxDigits;
  const iter = (str, iterNum, digits) => {
    if (digits <= 0) return str;
    return iter(`${str}${iterNum.toString()}`, iterNum, digits - 1);
  };
  const part1 = iter('', min, minDigits).toString();
  const part2 = iter('', max, maxDigits).toString();
  return Number(`${part1}${part2}`);
};

const getQuestionAnswer = () => {
  const question = index.getRandom(10, 1000);
  const correctAnswer = getBalancedNum(question);
  const qa = cons(question.toString(), correctAnswer.toString());
  return qa;
};

export default () => {
  const greeting = 'Balance the given number.';
  index.startGame(getQuestionAnswer, greeting);
};
