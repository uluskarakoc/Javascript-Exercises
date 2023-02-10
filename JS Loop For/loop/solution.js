// ## Task 1 - Addition
let sum = 0;
for (let i = 0; i < 21; i++) {
  sum += i;
}
console.log(`1-) ${sum}`);

// ## Task 2 - There are i bottles of beer on the wall
for (let i = 1; i < 6; i++) {
  console.log(`2--There is ${i} bottle of beer on the wall`);
}
// 3. **Der ungerade/gerade Reporter.**
for (let i = 0; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(`3**${i} is even.`);
  } else {
    console.log(`3**${i} is odd.`);
  }
}
// 4. **Multiplikationstabellen.**
for (let i = 0; i < 11; i++) {
  console.log(`4---${i} * 9 = ${i * 9}`);
}
// ### Task 4.1 - Multiplication tables from 1 to 10
for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`4.1--${i} * ${j} =${i * j}`);
  }
}
// ## Task 5 - Fizz Buzz
for (let i = 0; i < 101; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else {
    console.log(i);
  }
}
// 6. **Summe der Vielfachen**
let summe = 0;
for (let i = 0; i < 1001; i++) {
  if (i % 5 === 0 && i % 3 === 0)
   summe += i;
   
}
console.log(`6---${summe}`)
