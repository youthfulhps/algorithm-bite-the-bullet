const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  return inputs.split('').reduce((sum, curr, index) => {
    let binary = parseInt(curr, 8).toString(2);

    if (index !== 0) {
      binary = binary.padStart(3, '0');
    }

    return sum + binary;
  }, '');
}

console.log(solution(inputs));
