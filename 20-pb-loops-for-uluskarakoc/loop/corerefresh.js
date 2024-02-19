let i = 1;
const result = () => {
  console.log(`Result****${i++}`);
};

//  Task 1 - Addition
result();
let sum = 0;
for (let i = 0; i <= 20; i++) {
  sum += i;
}
console.log(sum);
// Task 2 - There are i bottles of beer on the wall
for (let i = 0; i < 5; i++) {
  console.log(`There are ${i} bottles of beer on the wall`);
}
// Task 3. **Der ungerade/gerade Reporter.**
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
//  Task 4. **Multiplikationstabellen.**
for (let i = 0; i < 10; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}
//  Task 4.1 - Multiplication tables from 1 to 10
for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
//  Task 5 - Fizz Buzz
for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(`${i}`);
  }
}
//  Task 6. **Summe der Vielfachen**
let summe = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    summe += i;
  }
}
console.log(summe);

// **Bonus**
// Task 7. Schreibe Programme, die zu folgenden Ausgaben in der Konsole führen:

// Extra task 1
// >100 200 300 400 500 600 700 800 900 1000
for (let i = 1; i < 11; i++) {
  console.log(`${i * 100}`);
}
// Extra task 2
// >0 2 4 6 8 10
for (let i = 0; i < 6; i++) {
  console.log(`${i * 2} `);
}
// Extra task 3
// >3 6 9 12 15
for (let i = 0; i < 6; i++) {
  console.log(`${i * 3} `);
}
// Extra task 4
// >9 8 7 6 5 4 3 2 1 0
result();
for (let i = 9; i >= 0; i--) {
  console.log(i);
}
// Extra task 5
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i);
  }
}
// Extra task 6
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j <= 4; j++) {
    console.log(`${j}`);
  }
}