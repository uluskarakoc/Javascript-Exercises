let i=1;
const result=()=>{console.log(`Result🍇🍇🍇🍇🍇🍇🍇 ${i++}`)}
// Using forEach() on sparse arrays
result()
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }

// Converting a for loop to forEach
result()
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// after
items.forEach((item) => {
  copyItems.push(item);
});

console.log({copyItems})