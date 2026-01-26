function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return arr;
  }

  const pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[left];
  let i = left + 1;
  let j = right;

  while (i <= j) {
    // 왼쪽에서 피벗보다 더 큰 값을 찾을 때까지 이동
    while (i <= right && arr[i] < pivot) i++;

    // 오른쪽에서 피벗보다 더 작은 값을 찾을 때까지 이동
    while (j >= left + 1 && arr[j] > pivot) j--;

    // 엇갈리지 않았다면 두 값을 교환
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  // 엇갈린 상태(i > j)이므로, 피벗과 j를 교환하여 피벗의 자리를 확정한다.
  swap(arr, left, j);

  return j; // 피벗의 인덱스를 반환
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const arr = [5, 3, 8, 4, 1, 6, 2, 7];
console.log(quickSort(arr));
