let i = 1;
const result = () => {console.log(`Result-------------${i++}`)};
// Arrow function
// reduce((accumulator, currentValue) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })

// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)


result();
const numbers = [1, -1, 2, 3];
let sum=0;
for(let n of numbers)
sum+= n
console.log(sum)

result()
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
result()
// const numbers = [1, -1, 2, 3];
// const sum = numbers.reduce( (a, c) => a + c);
// console.log(sum);

// MDN
result()
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum1 = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum1); // 6


result()
const numbers1 = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers1.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]





