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



const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const WALL = 1;
const EMPTY = 0;

const UP = 0;
const DOWN = 1;
const RIGHT = 2;
const LEFT = 3;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const [mapX, mapY] = inputs.shift();
  const [squareX, squareY, ...points] = inputs.pop();
  const [startX, startY, endX, endY] = points.map(point => point - 1);
  const map = inputs;

  const visit = Array.from({length: mapX}, () => Array(mapY).fill(0));

  const queue = new Queue();
  queue.enqueue([startX, startY]);

  visit[startX][startY] = 1;

  while (queue.size) {
    const batchSize = queue.size;

    for (let i = 0; i < batchSize; i++) {
      const [currentX, currentY] = queue.dequeue();

      for (let direction of [UP, DOWN, RIGHT, LEFT]) {
        const nextX = currentX + dx[direction];
        const nextY = currentY + dy[direction];

        if (isMovable(nextX, nextY)) {
          queue.enqueue([nextX, nextY]);
          visit[nextX][nextY] = visit[currentX][currentY] + 1;
        }
      }
    }
  }

  // 직사각형이 움직일 수 있는 지 확인한다.
  function isMovable(currentX, currentY) {
    if (currentX < 0 || currentX >= mapX || currentY < 0 || currentY >= mapY) {
      return false;
    }

    if (visit[currentX][currentY]) {
      return false;
    }

    const endX = currentX + squareX - 1;
    const endY = currentY + squareY - 1;

    for (let y = currentY; y < endY; y++) {
      if (!checkPosition(currentX, y)) {
        return false;
      }
    }

    for (let x = currentX; x < endX; x++) {
      if (!checkPosition(x, endY)) {
        return false;
      }
    }

    for (let y = endY; y > currentY; y--) {
      if (!checkPosition(endX, y)) {
        return false;
      }
    }

    for (let x = endX; x > currentX; x--) {
      if (!checkPosition(x, currentY)) {
        return false;
      }
    }

    return true;
  }

  function checkPosition(x, y) {
    if (x < 0 || x >= mapX || y < 0 || y >= mapY) {
      return false;
    }
    // 포인트가 벽이라면
    if (map[x][y] === WALL) {
      return false;
    }

    return true;
  }

  const answer = visit[endX][endY];
  return answer ? answer - 1 : -1;
}

console.log(solution(inputs));
