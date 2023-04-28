
const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  const N = inputs.shift();
  let result = '';

  let seats = inputs.shift();

  for (let i=0; i<seats.length;i++) {
    if (seats[i] === 'S') {
      result += 'S';
    } else {
      result += 'L';
      i++;
    }
  }

  return Math.min(seats.length, result.length +1);
}

console.log(solution(inputs));
