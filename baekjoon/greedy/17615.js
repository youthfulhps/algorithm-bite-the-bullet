const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const N = Number(inputs.shift());
  const chars = inputs.shift().split('').reverse();
  let currentIndex = 0;

  while (
    chars[currentIndex] === chars[currentIndex + 1] &&
    currentIndex < chars.length - 1
    ) {
    currentIndex++;
  }

  const remainChars = chars.slice(currentIndex + 1);

  const RLength = (remainChars.filter((char) => char === 'R') ?? []).length;
  const BLength = (remainChars.filter((char) => char === 'B') ?? []).length;

  return Math.min(RLength, BLength);
}

console.log(solution(inputs));
