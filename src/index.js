import readlineSync from 'readline-sync';

const runGame = (gameTask, gameExec) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!\n${gameTask}`);

  let question;
  let correctAnswer;
  for (let i = 1; i <= 3; i += 1) {
    ({ question, correctAnswer } = gameExec());
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
