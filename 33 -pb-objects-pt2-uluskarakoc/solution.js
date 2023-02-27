let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};
result();
// # **1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt.**
const isWithinRange = (zahl, obj) => {
  const entries = Object.entries(obj);
  if (zahl >= entries[0][1] && zahl <= entries[1][1]) {
    return true;
  }
  return false;
};
console.log(isWithinRange(4, { min: 0, max: 5 }));
console.log(isWithinRange(4, { min: 4, max: 5 }));
console.log(isWithinRange(4, { min: 6, max: 10 }));
console.log(isWithinRange(5, { min: 5, max: 5 }));
// # **2. Scrabble.**
result();
const scrabbleHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const calcMaxScrabbleScore = (obj) => {
  let sum = 0;
  for (let i = 0; i < obj.length; i++) {
    sum += obj[i].score;
  }
  return sum;
};
console.log(calcMaxScrabbleScore(scrabbleHand));
// # **3. Is it an empty object?**
result();
const isEmptyObject = (obj) => {
  const length = Object.entries(obj).length;
  if (length === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEmptyObject({}));
console.log(isEmptyObject({ a: 1 }));
// # **4. Buchstaben zählen.**
result();
const countLetters = (str) => {
  let countObj = {};
  for (let i = 0; i < str.length; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    } else {
      countObj[str[i]] = 1;
    }
  }

  return countObj;
};
console.log(countLetters("tree"));
console.log(countLetters("uluskarakoc"));

// # **5. Kostenloser Versand.**
result();
const freeShipping = (obj) => {
  let objVal = Object.values(obj);
  let sum = 0;
  for (let i = 0; i < objVal.length; i++) {
    sum += objVal[i];
   
  }
  return  sum >= 50 ? "true" : "false";
};
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);
