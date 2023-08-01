const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));


// 모두 -1, 즉 안익은 상태에서는 정답이 0이어야 함
// 시간 초과가 난다면, queue.shift 말고 직접 구현한 queue를 사용하는 것을 추천.

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


const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

const UNRIPE = 0;
const RIPE = 1;
const EMPTY = -1;

function solution(inputs) {
  const [Y, X, Z] = inputs.shift();
  const map = [];

  for (let i = 0; i < Z; i++) {
    let tmp = [];
    for (let j = 0; j < X; j++) {
      tmp.push(inputs.shift());
    }

    map.push(tmp);
  }

  const visit = Array.from({length: Z},
    () => Array.from({length: X}, () => Array(Y).fill(0)));

  for (let z = 0; z < Z; z++) {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if (map[z][x][y] === EMPTY) {
          visit[z][x][y] = EMPTY;
        }
      }
    }
  }

  const queue = new Queue();

  for (let z = 0; z < Z; z++) {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if (map[z][x][y] === RIPE) {
          queue.enqueue([z, x, y]);
          visit[z][x][y] = 1;
        };
      }
    }
  }

  while (queue.size) {
    const batchSize = queue.size;

    for (let i = 0; i < batchSize; i++) {
      const [currentZ, currentX, currentY] = queue.dequeue();

      for (let k = 0; k < 6; k++) {
        const nextZ = currentZ + dz[k];
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];

        if (
          nextZ >= 0 && nextZ < Z &&
          nextX >= 0 && nextX < X &&
          nextY >= 0 && nextY < Y
        ) {
          if (!visit[nextZ][nextX][nextY]) {
            if (map[nextZ][nextX][nextY] === UNRIPE) {
              queue.enqueue([nextZ, nextX, nextY]);
              visit[nextZ][nextX][nextY] = visit[currentZ][currentX][currentY] + 1;
            }
          }
        }
      }
    }
  }

  let max = 0;
  let hasZero = false;

  for (let z = 0; z < Z; z++) {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if (visit[z][x][y] === 0) {
          hasZero = true;
          break;
        }

        max = Math.max(max, visit[z][x][y]);
      }
    }
  }

  return hasZero ? -1 : Math.max(max - 1, 0);
}

console.log(solution(inputs));
