import * as index from '..';
import { cons } from 'hexlet-pairs';

const getSortedNum = (string, result) => {
  if (string.length <= 0) return (result);
  let smallestDigit = 9;
  let indexOfSmallestDigit = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] < smallestDigit) {
      smallestDigit = string[i];
      indexOfSmallestDigit = i;
    }
  }
  const newString = `${string.slice(0, indexOfSmallestDigit)}${string.slice(indexOfSmallestDigit + 1)}`;
  return getSortedNum(newString, `${result}${string[indexOfSmallestDigit]}`);
};

const getBalancedNum = (string) => {
  const sorted = getSortedNum(string, '');
  if ((Number(sorted[sorted.length - 1]) - Number(sorted[0])) <= 1) return sorted;

  let result = '';
  for (let i = 0; i < Math.ceil(sorted.length / 2); i += 1) {
    if (i === sorted.length - 1 - i) {
      result += sorted[i];
    } else {
      const sum = (Number(sorted[i]) + Number(sorted[sorted.length - 1 - i]));
      const left = Math.floor(sum / 2);
      const right = sum - left;
      result += left;
      result += right;
    }
  }

  return getBalancedNum(result);
};

const getQuestionAnswer = () => {
  const question = index.getRandom(10, 1000);
  const correctAnswer = getBalancedNum(question.toString());
  const qa = cons(question.toString(), correctAnswer.toString());
  return qa;
};

export default () => {
  const greeting = 'Balance the given number.';
  index.startGame(getQuestionAnswer, greeting);
};
