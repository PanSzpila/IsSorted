/*
Jedno z zadanek np brzmiało „napisz funkcje isSorted która przyjmuje tablice liczb i zwraca informacje o tym czy ta tablica jest posortowana (wszystko jedno w jaką stronę)”
np
isSorted([1, 2, 4]) -> true
isSorted([3, 2, 1]) -> true
isSorted([1, 1, 10]) -> true
isSorted([1, 1, 1]) -> true
isSorted([1, 2, 1]) -> false
*/

function isSorted(array) {
  let isSorted = false;
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (!(array[i - 1] === array[i] || array[i - 1] < array[i])) {
      isIncreasing = false;
    }
  }

  for (let i = 1; i < array.length; i++) {
    if (!(array[i - 1] === array[i] || array[i - 1] > array[i])) {
      isDecreasing = false;
    }
  }

  if (isIncreasing === true || isDecreasing === true) {
    isSorted = true;
  }

  console.log(isSorted);
}

isSorted([1, 8, 3, 4]);
