const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();
  const findN = inputs.shift()[0];
  const targets = inputs.shift();

  const binarySearchTree = new BinarySearchTree();
  numbers.forEach(number => binarySearchTree.insert(number));

  return targets
    .map((target) => binarySearchTree.has(target))
    .map(Number)
    .join(' ');
}

// function binarySearch(arr, findValue) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor((right + left) / 2);
//
//   while (right >= left) {
//     if (arr[mid] === findValue) {
//       return mid;
//     }
//
//     if (findValue > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//
//     mid = Math.floor((right + left) / 2);
//   }
//   return -1;
// }

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      }
    }
  }

  has(findValue) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === findValue) {
        return true;
      }

      if (findValue > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}

console.log(solution(inputs));
