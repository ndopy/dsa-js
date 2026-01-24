function merge(arr, left, mid, right) {
  const temp = [];

  let leftIndex = left;
  let rightIndex = mid + 1;
  let tempIndex = 0;

  // [7, 8], [2, 5]
  while (leftIndex <= mid && rightIndex <= right) {
    if (arr[leftIndex] <= arr[rightIndex]) {
      temp[tempIndex] = arr[leftIndex];
      leftIndex++;
    } else {
      temp[tempIndex] = arr[rightIndex];
      rightIndex++;
    }
    tempIndex++;
  }

  // 왼쪽이든 오른쪽이든 남은 항목들을 마저 채워주기
  while (leftIndex <= mid) {
    temp[tempIndex] = arr[leftIndex];
    leftIndex++;
    tempIndex++;
  }

  while (rightIndex <= right) {
    temp[tempIndex] = arr[rightIndex];
    rightIndex++;
    tempIndex++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[left + i] = temp[i];
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

const arr = [8, 7, 5, 2, 1, 3, 4, 6];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
