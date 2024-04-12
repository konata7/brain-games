import readlineSync from 'readline-sync';
import brainCalc from './games/brain-calc.js';
import brainEven from './games/brain-even.js';

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
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
