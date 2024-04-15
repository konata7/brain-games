import getRandomInt from '../utils.js';

const gameLoop = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default gameLoop;
