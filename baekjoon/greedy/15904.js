const inputs = require("fs").readFileSync("./input.txt").toString().trim();

function solution(inputs) {
  let target = inputs.split('')
    .filter(input => input !== ' ')
    .filter((input) => input.toUpperCase() === input).join('');

  let result = true;

  for (let i of 'UCPC') {
    const index = target.indexOf(i);

    if (index !== -1) {
      target = target.slice(index + 1);
    } else {
      result = false;
      break;
    }
  }

  return `I ${result ? 'love' : 'hate'} UCPC`;
}

console.log(solution(inputs));
