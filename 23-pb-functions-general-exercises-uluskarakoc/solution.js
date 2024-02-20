// 1. -----------------
let i = 1;
let printHeading = () => console.log("Exercise " + i++);

// const triplet = () => {
//   let text = "Katze";
//   console.log(text.repeat(3));
// };
// triplet();

printHeading();
const triplet = (x) => {
  console.log(x + x + x);
};
triplet("ulus");

// 2. -------------------
printHeading();
const quintuplet = (x) => "" + x + x + x + x + x;
// ist das gleiche als wenn man schreiben würde:
const quintuplet2 = (x) => {
  return "" + x + x + x + x + x;
};
// ist das gleiche als wenn man schreiben würde:
function quintuplet3(input) {
  return "" + input + input + input + input + input;
}
// soruuuu neden  burada iki nokta ayraci ile basliyoruz. yazmadigimizda neden nan veriyor.

console.log(quintuplet(2));

// 3. ----------
// const multiStr = (a, b) => {
//   for (i = 0; i < a; i++) {
//     return;
//   }
// };
// let result = multiStr(3, "ulus");
// console.log(result);

printHeading();
const multiStr = (a, b) => {
  let out = "";
  for (let counter = 0; counter < a; counter++) {
    out += b;
  }
  return out;
};
console.log(multiStr(3, "Woah"));

// 4. -----------
// zahlen = [1, 6, 83, 91, 0, -4, 1337, 5];
// const largestNumInArray = () => {
//   return Math.max(zahlen);
// };

// result = largestNumInArray();
// console.log(result);

printHeading();


const largestNumInArray = (x) => {
  let max = null; // yeah this does not work if all the inputs are <0
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
};
console.log(largestNumInArray([1, 6, 83, 91, 0, -4, 1337, 5]));

// 5. Diese Aufgabe hat 2 Teile---------
printHeading();
// Teil a) -----------
// function printIfDivisibleByTen(a) {
//   if (a % 10 === 0) {
//     console.log(`Èven 10`);
//   } else {
//     console.log(`Keine Ausgabe`);
//   }
// }
// printIfDivisibleByTen(85);
const printIfDivisibleByTen = (x) => x % 10 === 0 && console.log("Even 10!");

// Teil b)-----------
// function printIfDivisibleByTen(a) {
//   for (i = 0; i <= 125; i++) {
//     if (a % 10 === 0) {
//       console.log(`Èven 10`);
//     } else {
//       console.log(`Keine Ausgabe`);
//     }
//   }
// }
// printIfDivisibleByTen(85);

for (let counter = 0; counter <= 125; counter++) {
  printIfDivisibleByTen(counter);
}

// 6. ---------
printHeading();
const largestNum = (a, b, c, d, e) => {
  return Math.max(a, b, c, d, e);
};
let result1 = largestNum(2, 4, 6, 8, 32);
console.log(result1);

// printHeading();
// const largestNum = (a, b, c, d, e) => Math.max(a, b, c, d, e);
// console.log(largestNum(1, 2, 3, 2, 1));

// soruuuuuuu bunu returnle nasil yazariz.

// 7.------------
// printHeading();
// const isString = (a) => {
//   if (isNaN(a)) {
//     return true;
//   }
// };
// let result2 = isString("ulus");
// console.log(result2);

printHeading();
const isString = (x) => typeof x === "string";
console.log(isString("Cat"));
console.log(isString(Symbol("Wheeeee")));
console.log(isString(Number.EPSILON));

// 8.-----------------
// printHeading();
// const areStrings = (a, b) => {
//   if (isNaN(a) && isNaN(b)) {
//     return true;
//   }
// };

// console.log(areStrings("ulus", "karakoc"));

printHeading();
const areStrings = (a, b) => typeof a === typeof b && typeof b === typeof "";
console.log(areStrings("Cat"));
console.log(areStrings("Cat", "Cat"));
console.log(areStrings("Cat", Symbol("Wheeeee")));
console.log(areStrings("Cat", Number.EPSILON));

// 9. -----------------
// printHeading();
// const getFirstWord = (name1) => {
//   return name1;
// };
// let result4 = getFirstWord("Internetting is hard");
// console.log(result4);

printHeading();
const getFirstWord = (x) => x.split(" ")[0];
console.log(getFirstWord("Internetting is hard"));
console.log(getFirstWord("Hello World"));
console.log(getFirstWord("Hello"));

// 10. ---------------------
printHeading();
const wordRepeater = (x) => {
  const words = x.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      result.push(word);
    }
  }
  return result.join(" ");
};
console.log(wordRepeater("bunny"));
console.log(wordRepeater("Cat food"));
console.log(wordRepeater("I am groot"));
console.log(wordRepeater("O M G ?"));

// 11.-----------------------
// printHeading();
// const name2 = "ulus karakoc";
// const firstLetter = (a) => {
//   return name2[a];
// };
// const result5 = firstLetter(0);
// console.log(result5);

printHeading();
const firstLetter = (x) => x[0];
console.log(firstLetter("cat"));
console.log(firstLetter("quylthulg"));

// 12.---------------------
// printHeading();
// const name4 = "ulus karakoc";
// const firstLetters = (a) => {
//   return name4[a].toUpperCase();
// };
// const result6 = firstLetters(0);
// console.log(result6);

printHeading();
const firstLetters = (x) => {
  const arr = x.split(" ");
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += arr[i][0];
  }
  return out;
};
console.log(firstLetters("cat"));
console.log(firstLetters("What the fruit"));
console.log(firstLetters("MongoDB Express Node React"));
console.log(firstLetters("What You See Is What You Get"));

// 13. -------------------
printHeading();
const len = (x) =>
  typeof x === "string" || Array.isArray(x) ? x.length : null;
console.log(len("xx"));
console.log(len("x"));
console.log(len(""));
console.log(len([]));
console.log(len([1]));
console.log(len({}));

// 14.-------------------
printHeading();
// const value = "ulus";
// const explode = (value) => {
//   if (isNaN(value)) {
//     return;
//   } else if (typeof value === "string") {
//     return;
//   }
// };
// const result7 = explode(value);
// console.log(result7);

printHeading();
const explode = (x) => (typeof x.split === "function" ? x.split("") : null);
console.log(explode("Cat"));
console.log(explode(41));
console.log(explode(""));
console.log(explode("R & D"));

// soruuuuuuuuuuuuu burada neden typeof x === "string" yerine x.split li bisey yazdik ve x.split ne demek

// 15.---------------
printHeading();
const foo = (x) => x[x.length - 1] === "o";
console.log(foo(""));
console.log(foo("a"));
console.log(foo("o"));
console.log(foo("Cat"));
console.log(foo("Bravo"));
console.log(foo("Potato"));
console.log(foo("Blanket"));
console.log(foo("1"));

// 16----------------------
printHeading();
let bar = (x) => "Cat" + x.substring(2);
console.log(bar(""));
console.log(bar("x"));
console.log(bar("Cat"));
console.log(bar("Foobar"));
console.log(bar("Potato"));
console.log(bar("Tomato"));
console.log(bar("International Space Station"));
