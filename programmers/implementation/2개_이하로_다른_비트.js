function solution(numbers) {
  const answer = [];
  for (number of numbers) {
    answer.push(f(number));
  }

  return answer;
}

function f(number) {
  if (number % 2 === 0) {
    return number + 1;
  }

  let binaryNumber = "0" + number.toString(2);
  let targetIndex = binaryNumber.lastIndexOf("0");

  return parseInt(`${binaryNumber.slice(0, targetIndex)}10${binaryNumber.slice(targetIndex + 2)}`, 2);
}


