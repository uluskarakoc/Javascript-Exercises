let i = 1;
const result = () => {
  console.log(`Result---------------${i++}`);
};
result();
// **1. Die Größeren Zahlen.**
const findGreatest = (arr, num) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      array.push(arr[i]);
    }
  }
  return array.join(" ");
};
findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);

// const findGreatest = (arr, num) => {
//   return arr.filter((n) => n > num).join(" ");
// };
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// **2. The longest word.**
result();
const getLongestWord = (str) => {
  let longstword = "";
  str.split(" ").forEach((n) => {
    if (n.length > longstword.length) {
      longstword = n;
    }
  });
  return longstword;
};
console.log(getLongestWord("this is a web development course"));

// **3. Reverse.**
result();
const reverseNum = (num) => {
  let result1 = parseInt(num.toString().split("").reverse().join(""));
  if (num < 0) {
    result1 = -result1;
  }
  return result1;
};
console.log(reverseNum(34532));
console.log(reverseNum(-34532));

// **4. "AEIOU": Vowels.**
result();
const vowelCounter = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str.split("").forEach((n) => {
    if (vowels.includes(n)) {
      count++;
    }
  });
  console.log(count);
};
vowelCounter("this is a string");
vowelCounter("ulus karakoc");

// **5. Missing Number.**
result();
const findMissingNum = (arr) => {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let missing = [];
  number.forEach((n) => {
    if (!arr.includes(n)) {
      missing.push(n);
    }
  });
  return missing;
};
console.log(findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));




// **6. Cubed.**
result();
const sumOfCubes = (arr) => {
  return arr
    .map((n) => Math.pow(n, 3))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
};
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));





// **7. Wörterbuch.**
result();
const dictionary = (str, arr) => {
  return arr.filter((n) => n.startsWith(str));
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));






// **8. Even Number Generator.**
result();
const getEvenNums = (num) => {
  let arr = [];
  for (let i = 2; i <= num; i += 2) {
    arr.push(i);
  }
  return arr;
};
console.log(getEvenNums(8));
console.log(getEvenNums(4));
console.log(getEvenNums(2));





// **9: Alphabetische Reihenfolge**.
result();
const alphabetise = (str) => {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};
console.log(alphabetise("webdev"));
