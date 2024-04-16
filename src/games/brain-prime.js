import getRandomInt from '../utils.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameLoop = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { gameTask, gameLoop };
