import * as index from '..';
import { cons } from 'hexlet-pairs';

const getQuestionAnswer = () => {
  const indexExclude = index.getRandom(1, 10);
  const progressionStart = index.getRandom(0, 100);
  const progressionStep = index.getRandom(1, 10);
  const progression = [progressionStart];
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  const answer = progression[indexExclude].toString();
  progression[indexExclude] = '..';
  const question = progression.join(' ');
  return cons(question, answer);
};

export default () => {
  const greeting = 'What number is missing in this progression?';
  index.startGame(getQuestionAnswer, greeting);
};
