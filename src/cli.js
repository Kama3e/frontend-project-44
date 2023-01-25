import readlineSync from 'readline-sync';

const greetingPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  return namePlayer;
};
export default greetingPlayer();
