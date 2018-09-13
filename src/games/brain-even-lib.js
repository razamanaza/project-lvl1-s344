import * as index from '..';

const getCorrectAnswer = num => ((num % 2 === 0) ? 'yes' : 'no');
const getQuestion = () => (index.getRandom(0, 100));
const getQuestionString = question => (question.toString());

export default () => {
  index.startGame(getQuestion, getQuestionString, getCorrectAnswer);
};
