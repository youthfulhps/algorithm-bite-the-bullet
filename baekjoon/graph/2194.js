const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

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
    this.size = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

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

function solution(inputs) {
  const [MAP_X, MAP_Y, UNIT_SIZE_X, UNIT_SIZE_Y] = inputs.shift();
  const [endX, endY] = inputs.pop()
  const [startX, startY] = inputs.pop()
  const obstacles = inputs;

  const visit = Array.from({length: MAP_X + 1}, () => Array(MAP_Y + 1).fill(0));

  const queue = new Queue();

  queue.enqueue([startX, startY]);
  visit[startX][startY] = 1;

  while (queue.size) {
    const [currentX, currentY] = queue.dequeue();

    if (currentX === endX && currentY === endY) {
      return visit[currentX][currentY] - 1;
    }

    for (let k = 0; k < 4; k++) {
      const nextX = currentX + dx[k];
      const nextY = currentY + dy[k];

      if (isMovable(nextX, nextY)) {
        visit[nextX][nextY] = visit[currentX][currentY] + 1;
        queue.enqueue([nextX, nextY]);
      }
    }
  }

  function isMovable(nextX, nextY) {
    if (nextX < 1 || nextX > MAP_X || nextY < 1 || nextY > MAP_Y) {
      return false;
    }

    if (visit[nextX][nextY]) {
      return false;
    }

    for (let x = nextX; x < nextX + UNIT_SIZE_X; x++) {
      for (let y = nextY; y < nextY + UNIT_SIZE_Y; y++) {
        if (x < 1 || x > MAP_X || y < 1 || y > MAP_Y) {
          return false;
        }

        for (const [obstacleX, obstacleY] of obstacles) {
          if (x === obstacleX && y === obstacleY) {
            return false;
          }
        }
      }
    }

    return true;
  }

  return -1;
}

console.log(solution(inputs));
