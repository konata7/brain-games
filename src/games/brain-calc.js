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
      console.log('E: src/brain-calc.js calculate: got unsupported operator');
  }
  return res;
};

const gameTask = 'What is the result of the expression?';
const gameLoop = () => {
  const operand1 = getRandomInt(0, 100);
  const operand2 = getRandomInt(0, 100);
  const operators = '+-*';

  const operator = operators[getRandomInt(0, operators.length)];
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculate(operand1, operand2, operator);
  return { question, correctAnswer };
};

export { gameTask, gameLoop };
