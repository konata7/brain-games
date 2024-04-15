import getRandomInt from '../utils.js';

const gameLoop = () => {
  const first = getRandomInt(0, 20);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(8, 12);
  const missingIndex = getRandomInt(0, length - 1);

  let question = '';
  for (let i = 0; i < length; i += 1) {
    question = i !== missingIndex ? `${question}${first + step * i} ` : `${question}.. `;
  }
  const correctAnswer = (first + step * missingIndex).toString();
  return { question, correctAnswer };
};

export default gameLoop;
