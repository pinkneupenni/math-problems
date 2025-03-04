function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

const randomNumber = getRandomNumber(10);
console.log(`The random number is ${randomNumber}`);
