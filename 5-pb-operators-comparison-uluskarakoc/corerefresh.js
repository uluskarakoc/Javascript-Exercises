// 1- Check whether apples and oranges are equal.
const oranges = 30;
const apples = 20;
console.log(apples === oranges);
// 2- Check whether apples and oranges are not equal.
console.log(apples !== oranges);
// 3. Check whether `apples` is greater than `oranges`.
console.log("q3----");
console.log(apples > oranges);
// 4. Check whether `apples` is less than or equal to `oranges`.
console.log("q4----");
console.log(apples <= oranges);
// 5. Check whether `oranges` is greater than `apples`.
console.log("q5----");
console.log(oranges > apples);
// 6. Declare another variable `mangoes` and give it a value of 5. Multiply `mangoes` by `apples`, and check whether this result is greater than `mangoes` added to `oranges`.
console.log("q6----");
const mangoes = 5;
const maAp = mangoes * apples;
console.log(maAp > mangoes + oranges);
// 7. Subtract `mangoes` from `apples` and check whether this result is less than `oranges` divided by `mangoes`.
console.log("q7----");
console.log(apples - mangoes < oranges / mangoes);
// 8. Check whether `mangoes`, `apples` and `oranges` are equal.
console.log("q8----");
console.log((mangoes === apples) === oranges);
// 9. Check whether the remainder of `apples` divided by `mangoes` and the remainder of `oranges` divided by `mangoes` are equal.
console.log("q9----");
const re1 = apples % mangoes;
const re2 = oranges % mangoes;
console.log(re1 === re2);
// 10. Check whether `mangoes` added to `apples` is greater than `oranges` minus `mangoes`. If it is not, find an operator which will give a result of true.
console.log("q10----");
console.log(mangoes + apples > oranges - mangoes);
console.log(mangoes + apples == oranges - mangoes);

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
