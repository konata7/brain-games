import readlineSync from "readline-sync";

export const greet = () => {
    const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    console.log(`Hello, ${name}!`);
}