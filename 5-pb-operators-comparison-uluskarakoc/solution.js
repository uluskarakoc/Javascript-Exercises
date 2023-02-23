// 0. Declare two variables `apples` and `oranges`. Assign a value of 20 to `apples`. Assign a value of 30 to `oranges`.
console.log("q0----");
let apples = 20;
let oranges = 30;

// 1. Check whether `apples` and `oranges` are equal.
console.log("q1-----");
let check = apples === oranges;
console.log(check);

// 2. Check whether `apples` and `oranges` are *not* equal.
console.log("q2-----");
let result1 = apples !== oranges;
console.log(result1);

// 3. Check whether `apples` is greater than `oranges`.
console.log("q3----");
let check1 = apples > oranges;
console.log(check1);

// 4. Check whether `apples` is less than or equal to `oranges`.
console.log("q4----");
let check2 = apples <= oranges;
console.log(check2);

// 5. Check whether `oranges` is greater than `apples`.
console.log("q5----");
let check3 = oranges > apples;
console.log(check3);

// 6. Declare another variable `mangoes` and give it a value of 5. Multiply `mangoes` by `apples`, and check whether this result is greater than `mangoes` added to `oranges`.
console.log("q6----");
let mangoes = 5;
let mal = mangoes * apples;
let check4 = mal > mangoes + oranges;
console.log(check4);

// 7. Subtract `mangoes` from `apples` and check whether this result is less than `oranges` divided by `mangoes`.
console.log("q7----");
let subtract = apples - mangoes;
let check5 = subtract < oranges / mangoes;
console.log(check5);

// 8. Check whether `mangoes`, `apples` and `oranges` are equal.
console.log("q8----");
let check6 = (mangoes === apples) === oranges;
console.log(check6);

// 9. Check whether the remainder of `apples` divided by `mangoes` and the remainder of `oranges` divided by `mangoes` are equal.
console.log("q9----");
let result2 = (apples%mangoes) === (oranges%mangoes);
console.log(result2);

// 10. Check whether `mangoes` added to `apples` is greater than `oranges` minus `mangoes`. If it is not, find an operator which will give a result of true.
console.log("q10----");
let check7 = mangoes + apples;
let check8 = oranges - mangoes;
let result =(check7 > check8) ? "mehmet bey" : "fatih bey"
console.log(result);

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
console.log("q11----");
console.log("Danke für die Aufgabe");
