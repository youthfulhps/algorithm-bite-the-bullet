const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let [N, M] = inputs.shift().split(' ').map(Number);
  let cards = inputs.shift().split(' ').map(Number);

  while (M) {
    cards.sort((a, b) => a - b);
    const sumValue = cards.shift() + cards.shift();

    cards = [...cards, sumValue, sumValue];
    M--;
  }

  return cards.reduce((sum, curr) => sum + curr, 0);
}

console.log(solution(inputs));
