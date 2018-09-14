import * as index from '..';
import { cons } from 'hexlet-pairs';

const getCorrectAnswer = num => ((num % 2 === 0) ? 'yes' : 'no');
const getQuestion = () => (index.getRandom(0, 100));
const getQuestionString = question => (question.toString());

const getQuestionAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  const qa = cons(getQuestionString(question), correctAnswer);
  return qa;
};

export default () => {
  const greeting = 'Answer "yes" if number even otherwise answer "no".';

  index.startGame(getQuestionAnswer, greeting);
};
