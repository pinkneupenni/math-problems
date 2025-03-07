// Random math problem generation function
function generateMathProblem(): string {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1);
  let operator: string;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      operator = "+";
      break;
    case 1:
      operator = "-";
      break;
    case 2:
      operator = "*";
      break;
    default:
      throw new Error("Unhandled operator");
  }
  return `${num1} ${operator} ${num2}`;
}
