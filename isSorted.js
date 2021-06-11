/*
Jedno z zadanek np brzmiało „napisz funkcje isSorted która przyjmuje tablice liczb i zwraca informacje o tym czy ta tablica jest posortowana (wszystko jedno w jaką stronę)”
np
isSorted([1, 2, 4]) -> true
isSorted([3, 2, 1]) -> true
isSorted([1, 1, 10]) -> true
isSorted([1, 1, 1]) -> true
isSorted([1, 2, 1]) -> false
*/

const array = [1, 2, 3, 2];

function isSoreted(array) {
  let isSorted = true;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return console.log(i + 1 + "-th element of array is not a number");
    }
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] === array[i]) {
      console.log(
        i + "-th element of array is equal to " + (i - 1) + "-th element"
      );
    }

    if (array[i - 1] < array[i]) {
      console.log(
        i + "-th element of array is greater than " + (i - 1) + "-th element"
      );
      return increasingTest(i);
    }
    if (array[i - 1] > array[i]) {
      console.log(
        i + "-th element of array is lesser than " + (i - 1) + "-th element"
      );
      return decreasingTest(i);      
    }
  }

  function increasingTest(i) {
    for (i; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        determineUnsorted();
      }
      determineSorted(i);
    }
  }

  function decreasingTest(i) {
    for (i; i < array.length; i++) {
      if (array[i - 1] < array[i]) {
        determineUnsorted();
      }
      determineSorted(i);
    }
  }

  function determineSorted(i) {
    if (i === array.length - 1 && isSorted === true) {
      console.log("Array is sorted");
    }
  }
  function determineUnsorted() {
    isSorted = false;
    return console.log("Array is unsorted");
    
  }
}

isSoreted(array);
