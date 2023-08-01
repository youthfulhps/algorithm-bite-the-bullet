const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const N = inputs.shift()[0];
  let map = inputs;
  let result = 202;

  // 섬영역을 구한다.
  // 해당 지표에서 다른 섬 지표로 도착할때까지의 거리를 구한다.

  let visit = Array.from({length: N}, () => Array(N).fill(0));

  let islandNumber = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const queue = new Queue();

      if (map[x][y] === 1 && !visit[x][y]) {
        queue.enqueue([x, y]);
        visit[x][y] = ++islandNumber;
      }

      while (queue.size) {
        const [currentX, currentY] = queue.dequeue();

        for (let k = 0; k < 4; k++) {
          const nextX = currentX + dx[k];
          const nextY = currentY + dy[k];

          if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
            if (!visit[nextX][nextY] && map[nextX][nextY]) {
              queue.enqueue([nextX, nextY]);
              visit[nextX][nextY] = visit[currentX][currentY];
            }
          }
        }
      }
    }
  }

  map = visit;

  for (let t = 1; t <= islandNumber; t++) {
    const queue = new Queue();
    visit = Array.from({length: N}, () => Array(N).fill(0));
    let length = 1;
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (map[x][y] === t) {
          queue.enqueue([x,y]);
          visit[x][y] = 202;
        }
      }
    }

    while (queue.size) {
      const batchSize = queue.size;

      for (let i = 0; i < batchSize; i++) {
        const [currentX, currentY] = queue.dequeue();

        for (let k = 0; k < 4; k++) {
          const nextX = currentX + dx[k];
          const nextY = currentY + dy[k];

          if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
            if (map[nextX][nextY] && map[nextX][nextY] !== t) {
              result = Math.min(result, visit[currentX][currentY]);
              break;
            }
            if (!map[nextX][nextY] && !visit[nextX][nextY]) {
              queue.enqueue([nextX, nextY]);
              visit[nextX][nextY] = length;
            }
          }
        }
      }
      length++;
    }
  }

  return result;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.size--;

    return returnValue;
  }
}

console.log(solution(inputs));
