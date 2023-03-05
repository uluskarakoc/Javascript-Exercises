let i = 1;
const result = () => {
  console.log(`Result💥💥💥💥💥💥${i++}`);
};
result();

// **1.** Write a function named `doubleValues` which accepts an array and returns a new array with all the original values doubled.
const doubleValues = (arr) => {
  console.log(arr.map((n) => n * 2));
};
doubleValues([1, 2, 3]); // [2,4,6]
doubleValues([5, 1, 2, 3, 10]); // [10,2,4,6,20]

// **2.** Write a function named `onlyEvenValues` which accepts an array and returns a new array with only the even values from the original array.
result();
const onlyEvenValues = (arr) => {
  const filteredArray = arr.map((n) => {
    if (n % 2 === 0) {
      return n;
    } else {
      return [];
    }
  });
  return filteredArray.flat().flat();
};

console.log(onlyEvenValues([1, 2, 3]));
console.log(onlyEvenValues([5, 1, 2, 3, 10]));

// **3.** Write a function named `showFirstAndLast` which accepts an array of strings and returns a new array with only the first and last character of each string.
result();
// const showFirstAndLast = (arr) => {
//   let sum = "";
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][0] + arr[i].at(-1)+ " ";
//   }
//   return sum.split(" ");
// };
// console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
// console.log(showFirstAndLast(["hi", "goodbye", "smile"]));
const showFirstAndLast = (arr) => {
  const currentArray = arr.map(
    (item) => item[0] + item.substring(item.length - 1)
  );
  return currentArray;
};
console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
console.log(showFirstAndLast(["hi", "goodbye", "smile"]));
// **4.** Schreibe eine Funktion namens `addKeyAndValue`, die ein Array von Objekten, einen Schlüssel und einen Wert akzeptiert und dann das an die Funktion übergebene Array mit dem neuen Schlüssel und Wert für jedes Objekt zurückgibt
result();

const addKeyAndValue = (arr, key, value) => {
  const result = arr.map((n) => {
    n[key] = value;
    return n;
  });
  return result;
};
console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);
// **5.** Write a function named `vowelCount` which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters are counted.
result();
const vowelCount = (str) => {
  const vowelArr = ["a", "e", "u", "o", "i", "ü", "ö"];
  const countObj = {}
  const currentStr = [...str.toLowerCase()];
  currentStr.forEach((letter) => {
    if (vowelArr.includes(letter)) {
      countObj[letter] = (countObj[letter] || 0) + 1;
    }
  });
  return countObj;
};
console.log(vowelCount("Elie"))
console.log(vowelCount("Tim"))
console.log(vowelCount("Matt"))
console.log(vowelCount("hmmm"))
console.log(vowelCount("I Am awesome and so are you"))


