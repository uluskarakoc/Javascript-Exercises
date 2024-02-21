// 1-----
const twofer = (who) => {
  if (typeof who === "string") {
    return `Two for me and one for ${who}`;
  } else {
    return "Two for me and one for you";
  }
};
// console.log(twofer("Fran"));
// console.log(twofer());
// 2------------------------
const exponent = (x, y = 2) => {
  console.log(Math.pow(x, y));
};
// exponent(3, 3);
// exponent(3);
// 3------------------
const howManyArgs = (...args) => {
  return args.length;
};
// console.log(howManyArgs());
// console.log(howManyArgs(1, false, "hello"));
// console.log(howManyArgs("besser"));
// 4----------------------------------------------------
const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
// console.log(sum(1));
// console.log(sum(1, 15));
// console.log(sum(25, 25, 20));
// 5------------------------------------------------------
const average = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum / args.length;
};
// console.log(average(0));
// console.log(average(1, 2));
// console.log(average(1, 3, 6, 10));
// console.log(average(12, 14, 16));
