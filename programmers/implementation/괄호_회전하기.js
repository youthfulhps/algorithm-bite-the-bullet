const SMALL_OPEN = '(';
const SMALL_CLOSE = ')';
const MIDDLE_OPEN = '[';
const MIDDLE_CLOSE = ']';
const BIG_OPEN = '{';
const BIG_CLOSE = '}';


function solution(s) {
  let answer = 0;

  answer += check(s);

  for (let i = 1; i < s.length; i++) {
    s = spin(s);
    answer += check(s);
  }

  return answer;
}


function check(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      if ([SMALL_CLOSE, MIDDLE_CLOSE, BIG_CLOSE].includes(s[i])) {
        return 0;
      }
    }

    if ([SMALL_OPEN, MIDDLE_OPEN, BIG_OPEN].includes(s[i])) {
      stack.push(s[i]);
    } else {
      const last = stack[stack.length - 1];

      switch(last) {
        case SMALL_OPEN:
          if (s[i] === SMALL_CLOSE) {
            stack.pop();
          } else {
            break;
          }
        case MIDDLE_OPEN:
          if (s[i] === MIDDLE_CLOSE) {
            stack.pop();
          } else {
            break;
          }
        case BIG_OPEN:
          if (s[i] === BIG_CLOSE) {
            stack.pop();
          } else {
            break;
          }
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

function spin(s) {
  return s.slice(1) + s[0];
}

console.log(solution("}}}"))
