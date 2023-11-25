function solution(n) {
  const nOneCount = getOneCount(n);
  n++;

  while (getOneCount(n) !== nOneCount) n++;

  return n;
}

function getOneCount(num) {
  return num.toString(2).split('').filter(str => str === '1').length;
}




