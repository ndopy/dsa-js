function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const insertingData = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > insertingData) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = insertingData;
  }

  return array;
}

const arr = [5, 1, 4, 2, 3];
console.log(insertionSort(arr));
