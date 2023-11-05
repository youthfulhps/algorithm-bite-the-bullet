// upper, 찾고자 하는 값보다 큰 값이 등장하는 인덱스
// lower, 찾고자 하는 값보다 같거나! 큰 값이 등장하는 인덱스
// 같은 값을 포함하는 lower의 경우 arr[mid] >= findValue
// end를 반환하기 때문에 end가 범위에 포함될 수 있도록 -1 하지 않음

function upperBound(arr, findValue) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);

  while (end > start) {
    if (arr[mid] > findValue) {
      end = mid;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return end;
}

function lowerBound(arr, findValue) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);

  while (end > start) {
    if (arr[mid] >= findValue) {
      end = mid;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return end;
}
