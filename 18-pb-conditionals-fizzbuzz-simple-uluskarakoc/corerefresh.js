let i = 1;
const result = () => {
  console.log(`Result****${i++}`);
};

myNum = 25;

if (myNum % 5 === 0 && myNum % 3 === 0) {
  console.log("FizzBuzz");
} else if (myNum % 3 === 0) {
  console.log("Fizz");
} else if (myNum % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Teilt nicht");
}
