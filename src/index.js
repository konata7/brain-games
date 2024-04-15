import readlineSync from 'readline-sync';
import brainCalc from './games/brain-calc.js';
import brainEven from './games/brain-even.js';
import brainGcd from './games/brain-gcd.js';
import brainProgression from './games/brain-progression.js';
import brainPrime from './games/brain-prime.js';

const runGame = (game) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  let gameExec;
  switch (game) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      gameExec = brainEven;
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      gameExec = brainCalc;
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      gameExec = brainGcd;
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      gameExec = brainProgression;
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      gameExec = brainPrime;
      break;
    default:
  }
  let question;
  let correctAnswer;
  for (let i = 1; i <= 3; i += 1) {
    ({ question, correctAnswer } = gameExec());
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
