function sumOfArray(arr, index = arr.length - 1) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  if (index === 0) {
    return arr[0];
  }

  return arr[index] + sumOfArray(arr, index - 1);
}

const array1 = [1, 2, 3, 4, 5];
console.log(sumOfArray(array1));
