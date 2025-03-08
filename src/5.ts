const getRandomMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let operation;

  switch (Math.floor(Math.random() * 3)) {
    case 0:
      operation = "+";
      break;
    case 1:
      operation = "-";
      break;
    case 2:
      operation = "*";
      break;
    default:
      operation = "+";
  }

  return `${num1} ${operation} ${num2}`;
};
