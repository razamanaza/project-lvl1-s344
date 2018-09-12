#!/usr/bin/env node
import getUsername from '..';
import readlineSync from 'readline-sync';

const correctAnswer = num => ((num % 2 === 0) ? 'yes' : 'no');

const generateNum = () => (Math.floor(Math.random() * 99 - 1));

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const username = getUsername();
console.log(`Hello, ${username}!`);

let finalGreet = 'Congratulations,';
for (let i = 0; i < 3; i += 1) {
  const question = generateNum();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer(question)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'.`);
    finalGreet = "Let's try again,";
    break;
  }
  console.log('Correct!');
}

console.log(`${finalGreet} ${username}!`);
