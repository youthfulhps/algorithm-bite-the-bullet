function solution(msg) {
  const answer = [];
  const dict = Array.from({length: 26}, (_, index) => String.fromCharCode(index + 65));

  let before = '';

  for (let i = 0; i < msg.length; i++) {
    before += msg[i];

    if (!dict.includes(before)) {
      answer.push(dict.indexOf(before.slice(0, -1)) + 1);

      dict.push(before);

      before = msg[i];
    }
  }

  if (before) answer.push(dict.indexOf(before) + 1);

  return answer;
}
