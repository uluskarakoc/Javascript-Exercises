const myNum = 41;

if (myNum % 3 == 0) {
  console.log(`Fizz`);
} else if (myNum % 5 == 0) {
  console.log(`Buzz`);
} else if (myNum % 5 == 0 && myNum % 3 == 0) {
  console.log(`FizzBuzz`);
} else {
  console.log(myNum);
}
