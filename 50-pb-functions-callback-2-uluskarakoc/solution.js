// const squareNumber = (num) => {
//   console.log(Math.pow(num, 2));
// };

const squareNumber = (num) => {
    return Math.pow(num, 2);
  };
  

// const array = [1, 2, 3, 4, 5];

// const square = (arr, squareNumber) => {
//   arr.forEach(squareNumber);
// };

// square(array, squareNumber);

const array = [1, 2, 3, 4, 5];

const square = (arr, callback) => {
  return arr.map(callback);
};

console.log(square(array, squareNumber));
