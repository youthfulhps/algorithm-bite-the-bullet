const inputs = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

function solution(inputs) {
  let [_, K] = inputs.shift().split(" ").map(Number);
  const coins = inputs.map(Number).filter(input => input <= K).reverse();

  let result = 0;

  for (let coin of coins) {
    if (K === 0) {
      break;
    }

    result += Math.floor(K / coin);
    K %= coin;
  }

  return result;
}

console.log(solution(inputs));
