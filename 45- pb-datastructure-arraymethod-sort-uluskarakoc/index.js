let i = 1;
const result = () => {
  console.log(`Result---------------${i++}`);
};
result();
//Sort in decreasing order
//1
let arr = [5, 2, 1, -10, 8];

console.log(arr.sort((a, b) => b - a));

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

//2
//We can use slice() to make a copy and run the sort on it:
result();
const copySorted = (arr) => {
 return arr.sort((a, b) => a.localeCompare(b));
};
let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

console.log(sorted);
console.log(array);
