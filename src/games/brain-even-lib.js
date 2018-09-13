import * as index from '..';

const getCorrectAnswer = num => ((num % 2 === 0) ? 'yes' : 'no');
const getQuestion = () => (index.getRandom(0, 100));
const getQuestionString = question => (question.toString());

export default () => {
  const greeting = 'Answer "yes" if number even otherwise answer "no".';
  index.startGame(getQuestion, getQuestionString, getCorrectAnswer, greeting);
};
