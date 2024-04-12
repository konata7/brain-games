import getRandomInt from '../utils.js';

const gameLoop = () => {
  let question;
  let correctAnswer;
  const operand1 = getRandomInt(0, 100);
  const operand2 = getRandomInt(0, 100);
  switch (getRandomInt(1, 3)) {
    case 1:
      question = `${operand1} + ${operand2}`;
      correctAnswer = (operand1 + operand2).toString();
      break;
    case 2:
      question = `${operand1} - ${operand2}`;
      correctAnswer = (operand1 - operand2).toString();
      break;
    default:
      question = `${operand1} * ${operand2}`;
      correctAnswer = (operand1 * operand2).toString();
  }
  return { question, correctAnswer };
};

export default gameLoop;
