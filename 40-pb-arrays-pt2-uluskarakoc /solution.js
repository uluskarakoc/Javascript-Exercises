let i = 1;
const result = () => {
  console.log(`Result---------------${i++}`);
};
result();
// **1. Die Größeren Zahlen.**
// const findGreatest = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (num < arr[i]) {
//       console.log(arr[i]);
//     }
//   }
// };
// findGreatest([3, 4, 5], 4);
// findGreatest([10, 20, 30], 12);
// findGreatest([0, 10, 3], 4);

const findGreatest = (arr, num) => {
  return arr.filter((n) => n > num).join(" ");
};
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
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0;
  str.split("").forEach((n) => {
    if (vowels.includes(n)) {
      count++;
    }
  });
console.log(count)
};
vowelCounter("this is a string");
vowelCounter("ulus karakoc");

// console.log(("this is a string").split(""))
