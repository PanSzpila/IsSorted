/*
Jedno z zadanek np brzmiało „napisz funkcje isSorted która przyjmuje tablice liczb i zwraca informacje o tym czy ta tablica jest posortowana (wszystko jedno w jaką stronę)”
np
isSorted([1, 2, 4]) -> true
isSorted([3, 2, 1]) -> true
isSorted([1, 1, 10]) -> true
isSorted([1, 1, 1]) -> true
isSorted([1, 2, 1]) -> false

I bym se zrobił na Twoim miejscu na końcu tablice obiektow typu 
const tests = [
   { array: [1, 2, 3], expectedResult: true },
   { array: [1, 2, 1], expectedResult: false }
]
*/

function isSorted(array) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      isIncreasing = false;
    }
    if (array[i - 1] < array[i]) {
      isDecreasing = false;
    }
    if (isIncreasing === false && isDecreasing === false) {
      return false;
    }
  }

  if (isIncreasing === true || isDecreasing === true) {
    return true;
  }
}

const tests = [
  { array: [1, 2, 3], expectedResult: true },
  { array: [3, 2, 1], expectedResult: true },
  { array: [1, 2, 10], expectedResult: true },
  { array: [1, 2, 1], expectedResult: false },
];

function test(tests) {
  for (let i = 0; i < tests.length; i++) {
    if (isSorted(tests[i].array) != tests[i].expectedResult) {
      return `test failed at ${i}-th element`;
    }
  }
  return "test succesful";
}

console.log(test(tests));
