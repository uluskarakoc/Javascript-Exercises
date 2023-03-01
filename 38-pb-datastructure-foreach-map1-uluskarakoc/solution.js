let i = 1;
const result = () => {
  console.log(`Result💥💥💥💥💥💥${i++}`);
};
result();

// **1.** Write a function named `doubleValues` which accepts an array and returns a new array with all the original values doubled.
const doubleValues = (arr) => {
  console.log(arr.map((n) => n * 2));
};
doubleValues([1, 2, 3]); // [2,4,6]
doubleValues([5, 1, 2, 3, 10]); // [10,2,4,6,20]

// **2.** Write a function named `onlyEvenValues` which accepts an array and returns a new array with only the even values from the original array.
result();
const onlyEvenValues = (arr) => {
  const filteredArray = arr.map((n) => {
    if (n % 2 === 0) {
      return n;
    } else {
      return [];
    }
  });
  return filteredArray.flat().flat();
};

console.log(onlyEvenValues([1, 2, 3]));
console.log(onlyEvenValues([5, 1, 2, 3, 10]));

// **3.** Write a function named `showFirstAndLast` which accepts an array of strings and returns a new array with only the first and last character of each string.
result();
const showFirstAndLast = (arr) => {
  let sum = "";
  let array = Object.entries(arr);
  for (i = 0; i < array.length; i++) {
    sum += array[i][1][0] + array[i][1][array[i][1].length - 1] + " ";
  }
  return sum.split(" ");
};
console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
console.log(showFirstAndLast(["hi", "goodbye", "smile"]));
