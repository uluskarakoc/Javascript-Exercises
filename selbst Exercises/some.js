let i=1;
const result=()=>{console.log(`Result🥊🥊🥊🥊🥊🥊${i++}`)}

result()
function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
  [2, 5, 8, 1, 4].some(isBiggerThan10); // false
  [12, 5, 8, 1, 4].some(isBiggerThan10); // true
result()
const ulus=[2, 5, 8, 1, 4].some((x) => x > 10); // false
const ulus1=[12, 5, 8, 1, 4].some((x) => x > 10); // true
console.log(ulus);
console.log(ulus1);

result()
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
result()
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
result()
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };
  console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
  // false
  


  