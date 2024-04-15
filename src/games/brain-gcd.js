import getRandomInt from '../utils.js';

const gameLoop = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  let a;
  let b;
  if (num1 > num2) {
    a = num1;
    b = num2;
  } else {
    a = num2;
    b = num1;
  }

  const question = `${a} ${b}`;
  const gcd = (numA, numB) => {
    if (numA % numB === 0) return numB;
    return gcd(numB, numA % numB);
  };
  const correctAnswer = gcd(a, b).toString();
  return { question, correctAnswer };
};

export default gameLoop;
