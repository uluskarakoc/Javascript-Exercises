let i=1;
const result=()=>{console.log(`Result-------------- ${i++}`)}
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

// Printing the contents of an array
result()
const logArrayElements = (element, index /*, array */) => {
    console.log(`a[${index}] = ${element}`);
  };
  
  // Notice that index 2 is skipped, since there is no item at
  // that position in the array.
  [2, 5, , 9].forEach(logArrayElements);
  // Logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9

//   Modifying the array during iteration
result()
const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

console.log(`--------${words}`); // ['two', 'three', 'four']


result()
let nums=[42,32,56,26,45]
nums.forEach((a,b,c,)=>{console.log(a,b,c,)})


// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })
  
