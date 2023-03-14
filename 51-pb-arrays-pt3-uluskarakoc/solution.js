// Create your solutions here
let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
// **1. Where Have My Four Letter Words Gone?**
result();
const isFourLetters = (arr) => {
 return  arr.filter((n) => n.length === 4);
};

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]) );
console.log( isFourLetters(["Tomato", "Corn", "Lettuce"]) );
 console.log(isFourLetters(["Dog", "Cat", "Deer"]));
  
