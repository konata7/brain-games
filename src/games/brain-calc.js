import getRandomInt from '../utils.js';

const calculate = (operand1, operand2, operator) => {
  let res;
  switch (operator) {
    case '+':
      res = (operand1 + operand2).toString();
      break;
    case '-':
      res = (operand1 - operand2).toString();
      break;
    case '*':
      res = (operand1 * operand2).toString();
      break;
    default:
  }
  return res;
};

const gameTask = 'What is the result of the expression?';
const gameLoop = () => {
  let operator;
  const operand1 = getRandomInt(0, 100);
  const operand2 = getRandomInt(0, 100);
  switch (getRandomInt(1, 3)) {
    case 1:
      operator = '+';
      break;
    case 2:
      operator = '-';
      break;
    default:
      operator = '*';
  }
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculate(operand1, operand2, operator);
  return { question, correctAnswer };
};

export { gameTask, gameLoop };
