import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameLoop = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { gameTask, gameLoop };
