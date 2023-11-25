function solution(brown, yellow) {
  const answer = [];

  //horizontal은 yellow 갯수를 넘을 수 없음
  //vertical은 horizon의 갯수를 넘을 수 없음
  //horizontal * vertical이 yellow 갯수를 넘을 수 없음

  for (let horizontal = 1; horizontal <= yellow; horizontal++) {
    if (answer.length) break;
    for (let vertical = 1; vertical <= horizontal; vertical++) {
      if (yellow < horizontal * vertical) break;
      const brownArea = horizontal * 2 + vertical * 2 + 4;

      if (brownArea === brown && yellow === horizontal * vertical) {
        answer.push(horizontal + 2);
        answer.push(vertical + 2);
        break;
      }
    }
  }

  return answer;
}
