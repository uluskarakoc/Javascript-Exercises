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
result();
// **2. The longest word.**
const getLongestWord = (str) => {
  let longstword = "";
    str.split(" ").forEach((n) => {
      if (n.length > longstword.length) {
        longstword = n;
      }
    })
  ;
  return longstword;
};
;
console.log(getLongestWord("this is a web development course"));