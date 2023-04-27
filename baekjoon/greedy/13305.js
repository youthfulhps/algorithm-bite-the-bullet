// https://www.acmicpc.net/problem/13305
const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = 0n;

  const N = Number(inputs.shift());

  const distance = inputs.shift().split(' ').map(BigInt);
  const prices = inputs.shift().split(' ').map(BigInt);

  let currentPrice = prices[0];

  for (let now=0; now<N -1; now++) {
    result += distance[now] * currentPrice;
    if (currentPrice > prices[now + 1]) {
      currentPrice = prices[now + 1]
    }
  }


  return String(result);
}

console.log(solution(inputs));
