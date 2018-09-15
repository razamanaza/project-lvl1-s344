import readlineSync from 'readline-sync';
import startEven from './brain-even-lib';
import startCalc from './brain-calc-lib';
import startGCD from './brain-gcd-lib';
import startBalance from './brain-balance-lib';
import startProgression from './brain-progression-lib';
import startPrime from './brain-prime-lib';

export default () => {
  const games = [
    'Even number',
    'Calculator',
    'Find the greatest common divisor',
    'Balance',
    'Ariphmetical progression',
    'Prime number'];
  const index = readlineSync.keyInSelect(games, 'Choose a game.');
  switch (index) {
    case 0:
      startEven();
      break;
    case 1:
      startCalc();
      break;
    case 2:
      startGCD();
      break;
    case 3:
      startBalance();
      break;
    case 4:
      startProgression();
      break;
    case 5:
      startPrime();
      break;
    default:
      return;
  }
};
