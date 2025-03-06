// Your code goes here
function getRandomMathProblem() {
  const operators = ["+", "-", "*", "/"];
  const numbers = [1, 2, 3, 4, 5];
  const problem = `${numbers[0]} ${operators[0]} ${numbers[1]}`;
  return problem;
}
