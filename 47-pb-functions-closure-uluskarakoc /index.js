let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
result();
// 1. Create an `index.js` file
//Done
result();
// 2. Define "closure" in your own words. (1-2 sentences).
// wir rufen eine funktionen innerhalb von einen funktionen.
result();
// 3. Study the following code, then answer the questions below.
// -  a. Where is closure used in this code? How can you tell?

// -  b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

// -  c. What is the lexical scope of `newRoll`?
result();
function createBase(x) {
  return function (y) {
    return x + y;
    
  };
}
const addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
