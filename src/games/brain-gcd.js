import getRandomInt from '../utils.js';

const gcd = (numA, numB) => {
  let a;
  let b;
  if (numA > numB) {
    a = numA;
    b = numB;
  } else {
    a = numB;
    b = numA;
  }
  if (a % b === 0) return b;
  return gcd(b, a % b);
};
const gameLoop = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
};

export default gameLoop;
