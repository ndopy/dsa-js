function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    if (!swap) {
      break;
    }
  }

  return arr;
}

const result = bubbleSort([5, 1, 4, 2, 3]);
console.log(result);
