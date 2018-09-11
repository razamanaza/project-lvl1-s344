import readlineSync from 'readline-sync';

export const getUsername = () => {
  return(readlineSync.question('May I have your name? ', {defaultInput: 'Mr. Smith'}));
};