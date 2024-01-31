let u = 1;
corerefresh = () => {
  console.log(`corerefresh **** ${u++}`);
};
//   Array Methods
// Length
corerefresh();
const clothing = ["shoes", "shirts", "socks", "sweaters"];
console.log(clothing.length);
// Array.at
corerefresh();
const array1 = [5, 12, 8, 130, 44];
console.log(array1.at(2));
// concat
corerefresh();
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, "Ulus", "9"];
const numbers = num1.concat(num2, num3);
console.log(numbers);
// copyWithin
corerefresh();
const array2 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
console.log(array2.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index 1 all elements from index 3 to the end
console.log(array2.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
// entries
corerefresh();
const array3 = ["a", "b", "c"];
const iterator1 = array3.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
// every
corerefresh();
function isBigEnough(element, index, array) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough));
console.log([12, 54, 18, 130, 44].every(isBigEnough));
// fill
corerefresh();
const fill1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(fill1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(fill1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(fill1.fill(6));
// Expected output: Array [6, 6, 6, 6]

// filter
corerefresh();
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result3 = words.filter((word) => word.length > 6);
console.log(result3);
// Expected output: Array ["exuberant", "destruction", "present"]

// find
corerefresh();
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

//   function isCherries(fruit) {
//     return fruit.name === "cherries";
//   }

console.log(inventory.find((item) => item.name === "cherries"));
// { name: 'cherries', quantity: 5 }

// findIndex
corerefresh();
const idx = [5, 12, 8, 130, 44];
console.log(idx.findIndex((item) => item > 13));
// Expected output: 3
// findLast
corerefresh();
const num = [5, 12, 50, 130, 47, 44];
const found = num.findLast((element) => element > 45);
console.log(found);
// findLastIndex
corerefresh();
const number = [5, 12, 50, 130, 110, 102, 44];
console.log(number.findLastIndex((item) => item > 100));
// flat
corerefresh();

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

// flatMap
corerefresh();
const arr5 = [1, 2, 3, 4];
arr5.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr5.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr5.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

// forEach
corerefresh();
const each = ["a", "b", "c"];
each.forEach((element) => console.log(element));

// from
corerefresh();
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
// fromAsync
corerefresh();

// includes
corerefresh();

const say = [1, 2, 3];
console.log(say.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// Expected output: true
console.log(pets.includes("at"));
// Expected output: false

// indexOf
corerefresh();
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

// Array.isArray
corerefresh();
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });

// join
corerefresh();
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

// keys
corerefresh();
// lastIndexOf
corerefresh();
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3
console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1

// map
corerefresh();
const numaralar = [1, 4, 9, 16];
// Pass a function to map
const map1 = numaralar.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]
// Array.of
corerefresh();
console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]
console.log(Array.of("ulus", "karakoc"));
console.log(Array.of());
// Expected output: Array []
// pop
corerefresh();
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// push
corerefresh();
const animalss = ["pigs", "goats", "sheep"];

const count = animalss.push("cows");
console.log(count);
// Expected output: 4
console.log(animalss);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animalss.push("chickens", "cats", "dogs");
console.log(animalss);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// reduce
// corerefresh();
// const totalPrice = items.reduce((accumulator ,item) => {
//     return accumulator += item.price;
//   }, 0)
// reduceRight
corerefresh();
// reverse
corerefresh();
const reverse1 = ["one", "two", "three"];
console.log("array1:", reverse1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = reverse1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", reverse1);
// Expected output: "array1:" Array ["three", "two", "one"]
// shift
corerefresh();
const first = [1, 2, 3];

const firstElement = first.shift();

console.log(first);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

// slice
corerefresh();
const animals3 = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals3.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals3.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals3.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals3.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals3.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals3.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// some
corerefresh();
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

// sort
corerefresh();
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const sort1 = [1, 30, 4, 21, 100000];
const simpleSort = sort1.sort();
console.log(simpleSort);
// Expected output: Array [1, 100000, 21, 30, 4]

const sortLearn = sort1.sort((a, b) => a - b);
console.log(sort1);
console.log(sortLearn);

// splice
corerefresh();
const monthss = ['Jan', 'March', 'April', 'June'];
monthss.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(monthss);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

monthss.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(monthss);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


// toLocaleString()
corerefresh();
// Cok anlamadim bunu.
const timeZone = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = timeZone.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
// toReversed()
corerefresh();

// Tek Farki asil arrayi degistirmiyor.
corerefresh();
// toSorted()
// Tek Farki asil arrayi degistirmiyor.
corerefresh();
// toSpliced()
corerefresh();
// toString()
corerefresh();

// unshift()
corerefresh();
const shift = [1, 2, 3];

console.log(shift.unshift(4, 5));
// Expected output: 5

console.log(shift);
// Expected output: Array [4, 5, 1, 2, 3]

// values()
corerefresh();
// with()