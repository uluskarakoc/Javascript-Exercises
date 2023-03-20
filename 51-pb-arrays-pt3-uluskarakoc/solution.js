// Create your solutions here
let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};

// **1. Where Have My Four Letter Words Gone?**
result();
const isFourLetters = (arr) => {
  return arr.filter((n) => n.length === 4);
};
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));
// **2. Print Month Name.**
result();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getMonthName = (num) => {
  if (num <= 12 && num >= 1) {
    console.log(months[num - 1]);
  } else {
    console.log(`Böyle bir ay yok`);
  }
};
getMonthName(3);
getMonthName(12);
getMonthName(6);
getMonthName(32);

// **3. Amplify the Multiples of 4.**
result();
let arr = [];
const amplifyMultiplesOfFour = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 4 === 0) {
      let mal10 = i * 10;
      arr.push(mal10);
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
};

amplifyMultiplesOfFour(25);
//  **4. Eine ist nicht wie die anderen...**
function unique(arr) {
  const uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      uniqueNumbers.push(arr[i]);
    }
  }

  return uniqueNumbers;
}
console.log(unique([3, 3, 3, 7, 3, 3, 5])); // [7, 5]
// **5. Wort-Ranking.**
result();
const wordRank = (str) => {
  arr = str.split(" ");
  let longestLength = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength.length) {
      longestLength = arr[i];
    }
  }
  console.log(longestLength);
};

wordRank("The quick brown fox.");
wordRank("Nancy is very pretty.");
wordRank("Check back tomorrow, man!");
wordRank("Today is Wednesday.");
// **6. c4n y0u r34d th15?**
result();
// const code = (str) => {
//   let arr = str.split("");
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//       arr[i] === "a";
//     } else if (arr[i] === 3) {
//       arr[i] === "e";
//     } else if (arr[i] === 1) {
//       arr[i] === "i";
//     } else if (arr[i] === 0) {
//       arr[i] === "o";
//       console.log(arr);
//     }
//   }
// };
// code("javascript is cool");
// code("programming is fun");
// code("become a coder");

function code(str) {
  const lowerStr = str.toLowerCase();
  const letters = lowerStr.split('');

  const hackerLetters = ['a', 'e', 'i', 'o', 's'];
  const replacements = ['4', '3', '1', '0', '5'];

  for (let i = 0; i < letters.length; i++) {
    const index = hackerLetters.indexOf(letters[i]);
    if (index !== -1) {
      letters[i] = replacements[index];
    }
  }
  return letters.join('');
}

console.log(code('do you even code, sis')); // d0 y0u 3v3n c0d3, 515
