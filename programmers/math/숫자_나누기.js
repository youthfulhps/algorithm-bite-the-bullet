function solution(arrayA, arrayB) {
  let arrayAGCD = arrayA.reduce(getGCD);

  if (hasDivisibleNumber(arrayB, arrayAGCD)) {
    arrayAGCD = 0;
  }

  let arrayBGCD = arrayB.reduce(getGCD);

  if (hasDivisibleNumber(arrayA, arrayBGCD)) {
    arrayBGCD = 0;
  }

  return Math.max(arrayAGCD, arrayBGCD);
}

function getGCD(a, b) {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a%b);
}

function hasDivisibleNumber(target, divider) {
  return target.some(number => (number % divider) === 0);
}
