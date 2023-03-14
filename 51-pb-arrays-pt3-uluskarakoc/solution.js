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
    console.log(`Artislik Yapma`);
  }
};
getMonthName(3);
getMonthName(12);
getMonthName(6);
getMonthName(32);

// **3. Amplify the Multiples of 4.**
result();
let arr=[]
const amplifyMultiplesOfFour = (num) => {
for(let i=0;i<=num;i++){
 if(i%4===0){
  let mal10=i*10
  arr.push(mal10)
 }else{
  arr.push(i)
 }

}
console.log(arr);
};

 amplifyMultiplesOfFour(25);

