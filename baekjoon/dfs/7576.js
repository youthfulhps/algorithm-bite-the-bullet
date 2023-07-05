const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// 큐 클래스
class Queue {
  constructor() {
    this.head = null // 제일 앞 노드
    this.rear = null // 제일 뒤 노드
    this.length = 0 // 노드의 길이
  }

  push(data) {
    // 노드 추가.
    const node = new Node(data) // data를 가진 node를 만들어준다.
    if (!this.head) {
      // 헤드가 없을 경우 head를 해당 노드로
      this.head = node
    } else {
      this.rear.next = node // 아닐 경우 마지막의 다음 노드로
    }
    this.rear = node // 마지막을 해당 노드로 한다.
    this.length++
  }

  pop() {
    // 노드 삭제.
    if (!this.head) {
      // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
      return false
    }
    const data = this.head.data // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
    this.head = this.head.next
    this.length--

    return data
  }
}

function solution(inputs) {
  const [Y, X] = inputs.shift();
  const map = inputs;

    const queue = new Queue();

  const visit = Array.from({length: X}, () => Array(Y).fill(0));
  let result = 0;

  let count = X * Y;
  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (map[x][y] === 1) {
        queue.push([x, y]);
        visit[x][y] = 1;
      }
    }
  }

  while (queue.length) {
    const [currentX, currentY] = queue.pop();
    BFS(currentX, currentY);
    count--;
  }

  function BFS(currentX, currentY) {
    for (let i = 0; i<4; i++) {
      const nextX = currentX + dx[i];
      const nextY = currentY + dy[i];

      if (nextX >= 0 && nextX < X && nextY >=0 && nextY < Y) {
        if (map[nextX][nextY] === -1) {
          visit[nextX][nextY] = -1;
          count--;
          continue;
        }
        if (!map[nextX][nextY]) {
          if (visit[nextX][nextY] > visit[currentX][currentY] + 1 || !visit[nextX][nextY]) {
            visit[nextX][nextY] = visit[currentX][currentY] + 1;
            count--;
            queue.push([nextX, nextY]);
          }
        }
      }
    }
  }

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (visit[x][y] === 0 && map[x][y] !== -1) {
        return -1;
      }

      result = Math.max(visit[x][y], result);
    }
  }

  return result - 1;
}

console.log(solution(inputs));
