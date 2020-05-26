function solution(array, commands) {
  const answer = commands.map((c) => {
    const [start, end, idx] = c;
    return array.slice(start - 1, end).sort((a, b) => a - b)[idx - 1];
  });
  return answer;
}

