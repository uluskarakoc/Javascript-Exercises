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
  console.log(months[num -1]);
};
getMonthName(3);
getMonthName(12);
getMonthName(6);

