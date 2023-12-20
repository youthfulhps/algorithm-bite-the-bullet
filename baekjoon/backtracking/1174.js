const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = Number(inputs);
  const answer = [];

  function back(current) {
    answer.push(current);

    for (let i = 0; i < 10; i++) {
      if (!current.length) {
        back(`${current}${i}`);
      }

      else if (Number(current[current.length - 1]) > i) {
        back(`${current}${i}`);
      }
    }
  }

  back('');

  const result = answer.filter(el => !!el).sort((a, b) => Number(a) - Number(b))[N - 1];

  return result ?? -1;
}

console.log(solution(inputs));
