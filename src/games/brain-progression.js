import getRandomInt from '../utils.js';

const getProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) progression.push(first + step * i);
  return progression;
};
const getProgressionString = (progression, missingIndex) => {
  const progressionCopy = [...progression];
  progressionCopy[missingIndex] = '..';
  return progressionCopy.join(' ');
};

const gameTask = 'What number is missing in the progression?';
const gameLoop = () => {
  const first = getRandomInt(0, 20);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(8, 12);
  const missingIndex = getRandomInt(0, length - 1);

  const progression = getProgression(first, step, length, missingIndex);
  const question = getProgressionString(progression, missingIndex);
  const correctAnswer = progression[missingIndex].toString();
  return { question, correctAnswer };
};

export { gameTask, gameLoop };
