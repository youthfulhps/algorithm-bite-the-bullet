function solution(arr) {
  var answer = [];

  let arrLength = arr.length;
  let currentSize = arrLength;

  let zeroCount = 0;
  let oneCount = 0;


  while (currentSize > 1) {
    const batchSize = arrLength / currentSize;

    for (let x = 0; x < batchSize; x++) {
      for (let y = 0; y < batchSize; y++) {
        const area = [];

        for (let i = x * currentSize; i < (x + 1) * currentSize; i++) {
          for (let j = y * currentSize; j < (y + 1) * currentSize; j++) {
            area.push([i, j, arr[i][j]]);
          }
        }

        const isSame = area.every((a) => a[2] === area[0][2]);

        if (isSame) {
          area.forEach(([x, y, _]) => {
            arr[x][y] = -1;
          })

          if (area[0][2] === 1) {
            oneCount++;
          } else if (area[0][2] === 0) {
            zeroCount++;
          }
        }
      }
    }
    currentSize /= 2;
  }

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[i][j] === 1) {
        oneCount++;
      } else if (arr[i][j] === 0) {
        zeroCount++;
      }
    }
  }

  return [zeroCount, oneCount]
}
