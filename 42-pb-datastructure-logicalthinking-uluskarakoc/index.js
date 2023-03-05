let i = 1;
const Result = () => {
  console.log(`Result-----------${i++}`);
};
Result();
// #### 1. Lowest to Highest
let arr = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
console.log(
  arr.sort((a, b) => {
    return a - b;
  })
);

// #### 2. Alphabetical Order
Result();
let names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
console.log(names.sort((a, b) => a.localeCompare(b)));

// **Bonus**
// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.
Result();

