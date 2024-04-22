import getRandomInt from '../utils.js';

const gcd = (numA, numB) => {
  if (numB === 0) return numA;
  return gcd(numB, numA % numB);
};

const gameTask = 'Find the greatest common divisor of given numbers.';
const gameLoop = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
};

export { gameTask, gameLoop };
