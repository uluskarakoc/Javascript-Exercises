let i = 1;
let result = () => console.log("Result*****" + i++);
result();
// 1. -----------------
const triplet = (x) => {
  //   console.log(x + x + x);
  console.log(x.repeat(30));
};
// triplet("cat");
// 2. -------------------
result();
const quintuplet = (x) => {
  console.log(x.repeat(5));
};
// quintuplet("dog");
// 3. ----------
result();
// const multiStr = (x, y) => {
//   console.log(y.repeat(x));
// };
// multiStr(3, "Woah");
const multiStr = (x, y) => {
  let out = "";
  for (let i = 0; i < x; i++) {
    out += y;
  }
  return out;
};
// console.log(multiStr(3, "Woah"));
// 4. -----------
result();
const arr = [1, 6, 83, 91, 0, -4, 1337, 5];
let max = 0;
const largestNumInArray = (x) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
};
// console.log(largestNumInArray(arr));
// 5. Diese Aufgabe hat 2 Teile---------
// Teil a) -----------
result();
const printIfDivisibleByTen = (x) => {
  if (x % 10 === 0) {
    console.log("Even 10!");
  } else {
    console.log("no output");
  }
};
// printIfDivisibleByTen(1);
// printIfDivisibleByTen(2);
// printIfDivisibleByTen(32);
// printIfDivisibleByTen(10);
// printIfDivisibleByTen(30);
// printIfDivisibleByTen(90000);
// Teil b)-----------
result();
for (let i = 0; i < 125; i++) {
  //   printIfDivisibleByTen(i);
}
// 6. ---------
result();
const largestNum = (a, b, c, d, e) => console.log(Math.max(a, b, c, d, e));
// largestNum(3, 67, 89, 142, 22);
// 7.------------
result();
const isString = (x) => {
  if (typeof x === "string") {
    console.log(true);
  } else {
    console.log(false);
  }
};
//    isString("q");
//    isString(6);

// 8.-----------------
result();
const areStrings = (x, y) => {
  if (typeof x === "string" && typeof y === "string") {
    console.log(true);
  } else {
    console.log(false);
  }
};
// areStrings("q","c");
// areStrings(4,6);
// areStrings(4,"g");
// 9. -----------------
const getFirstWord = (str) => {
  const word = str.split(" ");
  console.log(word[0]);
};
// getFirstWord("Internetting is hard");
// getFirstWord("Hello World");
// getFirstWord("Hello");
// 10. ---------------------
const wordRepeater = (str) => {
  let again = [];
  const repeat = str.split(" ");
  for (let i = 0; i < repeat.length; i++) {
    for (let j = 0; j < repeat.length; j++) {
      again.push(repeat[i]);
    }
  }
  return again.join(" ");
};
// console.log(wordRepeater("bunny"));
// console.log(wordRepeater("Cat food"));
// console.log(wordRepeater("I am groot"));
// console.log(wordRepeater("O M G ?"));
// 11.-----------------------
const firstLetter = (str) => {
  console.log(str.split("")[0]);
};
// firstLetter("cat");
// firstLetter("quylthulg");
// 12.---------------------
const firstLetters = (str) => {
  let newWord = "";
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    newWord += arr[i][0];
  }
  console.log(newWord);
};
// firstLetters("cat");
// firstLetters("What the fruit");
// firstLetters("MongoDB Express Node React");
// firstLetters("What You See Is What You Get");
// 13. -------------------
const len = (x) => {
  if (typeof x === "string") {
    console.log(x.length);
    console.log("string");
  } else if (Array.isArray(x)) {
    console.log(x.length);
    console.log("array");
  } else {
    console.log(null);
  }
};
// len("acaacea");
// len([47, "alo", 2, "maria"]);
// 14.-------------------
const explode = (x) => {
  if (typeof x != "string") {
    return null;
  } else if (typeof x === "string") {
    return x.split("");
  }
};
// console.log(explode("Cat"));
// console.log(explode(41));
// console.log(explode(""));
// console.log(explode("R & D"));
// 15.---------------
const foo = (str) => {
  const arrFoo = str.split("");
  if (arrFoo.includes("o")) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// foo("");
// foo("a");
// foo("o");
// foo("Cat");
// foo("Tomato");
// foo("Potato");
// foo("Blanket");
// foo("1");
// 16----------------------
const bar = (str) => {
  const catArr = str.split("");
  catArr[0] = "Ca";
  catArr[1] = "t";
  console.log(catArr.join(""));
};
// bar("");
// bar("x");
// bar("Cat");
// bar("Foobar");
// bar("Potato");
// bar("Tomato");
// bar("International Space Station");
