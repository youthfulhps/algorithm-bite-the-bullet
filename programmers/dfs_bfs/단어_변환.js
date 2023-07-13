function solution(begin, target, words) {
  words = [begin, ...words];
  if (!words.includes(target)) {
    return 0;
  }

  const wordsLength = words.length;
  const used = Array(wordsLength).fill(0);

  let stack = [begin];
  used[0] = 1;

  while (stack.length) {
    const currentWord = stack.shift();
    const currentWordIndex = words.indexOf(currentWord);

    if (currentWord === target) {
      break;
    }

    for (let i = 0;i <wordsLength; i++) {
      if (isOneDiff(currentWord, words[i]) && !used[i]) {
        stack.push(words[i]);
        used[i] = used[currentWordIndex] + 1;
      }
    }
  }

  const targetIndex = words.indexOf(target);
  return used[targetIndex] - 1;
}

// 문자열 비교, 다른 문자가 하나만 있는지 검증
function isOneDiff(input, target) {
  let result = 0;
  for (let i = 0;i < input.length;i++) {
    if (input[i] !== target[i]) {
      result++;
    }
  }
  return result === 1;
}
