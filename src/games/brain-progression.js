import getRandomInt from '../utils.js';

const getProgression = (first, step, length, missingIndex) => {
  const progression = {
    sequence: '',
    missingMember: '',
  };
  for (let i = 0; i < length; i += 1) {
    progression.sequence = i !== missingIndex ? `${progression.sequence}${first + step * i} ` : `${progression.sequence}.. `;
  }
  progression.missingMember = (first + step * missingIndex).toString();
  return progression;
};
const gameLoop = () => {
  const first = getRandomInt(0, 20);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(8, 12);
  const missingIndex = getRandomInt(0, length - 1);

  const progression = getProgression(first, step, length, missingIndex);
  const question = progression.sequence;
  const correctAnswer = progression.missingMember;
  return { question, correctAnswer };
};

export default gameLoop;
