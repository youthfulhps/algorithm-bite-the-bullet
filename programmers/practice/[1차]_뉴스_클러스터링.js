function solution(str1, str2) {
  let intersection = 0;
  let union = 0;

  function getSet(str) {
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {
      const current = str.slice(i, i + 2).toLowerCase();

      if (current.match(/[A-Za-z]{2}/)) {
        result.push(current);
      }
    }

    return result;
  }

  const str1Set = getSet(str1);
  const str2Set = getSet(str2);

  const set = new Set([...str1Set, ...str2Set]);

  for (const value of set) {
    const has1 = str1Set.filter(x => x === value).length;
    const has2 = str2Set.filter(x => x === value).length;

    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  }

  return !union ? 65536 : Math.floor((intersection / union) * 65536)
}
