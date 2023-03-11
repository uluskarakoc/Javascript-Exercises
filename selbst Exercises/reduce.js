let i = 1;
const result = () => {
  console.log(`Result-------------${i++}`);
};
// Arrow function
// reduce((accumulator, currentValue) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })

// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

result();
const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);

result();
// a=0,c=1=>a=1
// a=1,c=-1=>a=0
// a=0,c=2=>a=2
// a=2,c=3=>a=5

// const numbers = [1, -1, 2, 3];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);
result();

// a=1,c=-1=>a=0
// a=0,c=2=>a=2
// a=2,c=3=>a=5

// const numbers = [1, -1, 2, 3];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);
result();
// const numbers = [1, -1, 2, 3];
// const sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue);
// console.log(sum);
result();
// const numbers = [1, -1, 2, 3];
// const sum = numbers.reduce( (a, c) => a + c);
// console.log(sum);

// MDN
result();
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum1 = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);

console.log(sum1); // 6

result();
const numbers1 = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers1.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

// Flatten an array of arrays
result();
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened);
// flattened is [0, 1, 2, 3, 4, 5]

// Counting instances of values in an object
result();
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// How reduce() works without an initial value
result();

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}
const snc = array.reduce(reducer, 1);
console.log(snc);

// How reduce() works with an initial value
result();
const withInitialValue = [(15, 16, 17, 18, 19)].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
console.log(withInitialValue);

// Concatenating arrays contained in an array of objects using the spread syntax and initialValue
result();
// friends - an array of objects
// where object field "books" is a list of favorite books
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ["Alphabet"],
);
console.log(allbooks);
// [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
