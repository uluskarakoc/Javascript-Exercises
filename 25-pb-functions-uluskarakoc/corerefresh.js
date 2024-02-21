// 1. Summieren-------
const sumIntFrom1ToN = (x) => {
  let sum = 0;
  for (let i = 0; i <= x; i++) {
    sum += i;
  }
  console.log(sum);
};
// sumIntFrom1ToN(4);
// sumIntFrom1ToN(13);
// sumIntFrom1ToN(600);
// 2. Cubed--------------------------------
const sumOfCubes = (x, y, z) => {
  console.log(Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3));
};
// sumOfCubes(1, 5, 9);
// sumOfCubes(2, 8);
// sumOfCubes();
// 3. String Check---------------------------------
const isStrStartOfWord = (x, y) => {
  console.log(y.includes(x));
};

// isStrStartOfWord("bu", "button")
// isStrStartOfWord("tri", "triplet")
// isStrStartOfWord("beau", "pastry")
// 4. Kleiner als oder gleich Null?-----------------------
const isLEQZero = (num) => {
  if (num === 0 || num < 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// isLEQZero(3);
// isLEQZero(0);
// isLEQZero(-4);
// isLEQZero(10);
// 5. Vorkommen zählen.--------------------------------
const countOccurrences = (x, y) => {
  let sum = 0;
  const arr = x.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === y) {
      sum += 1;
    } else {
    }
  }
  console.log(sum);
};
// countOccurrences("this is a string", "i");
// countOccurrences("ulus Karakoc", "u");
// 6. X hoch X------------------------------------
const calcBaseToExponent = (x, y) => {
  console.log(Math.pow(x, y));
};
// calcBaseToExponent(5, 3);
// calcBaseToExponent(10, 10);
// calcBaseToExponent(3, 3);
// 7. Hundejahre-------------------------------
const dogAge = (x) => {
  console.log(7 * x);
};
// dogAge(4);
// 8. Ein lebenslanger Vorrat... -----------------------------
const calcLifetimeSupply = (x, y) => {
  if (x < 100) {
    const restSnack = (100 - x) * y;
    console.log(restSnack);
  } else {
    console.log("nichts");
  }
};
// calcLifetimeSupply(25, 2);
// calcLifetimeSupply(40, 3);
// 9. Wo ist Waldo?---------
const isWaldoHere = (str) => {
  console.log(str.toLowerCase().includes("waldo"));
};
// isWaldoHere("is there a wal here?");
// isWaldoHere("I found you Waldo!");
// isWaldoHere("Wait, don't you mean Wally?");
// isWaldoHere("waldo is here");
// 10. Pie. --------------------------------------
const isEqualSlices = (x, y, z) => {
  if (y * z > x) {
    console.log(false);
  } else {
    console.log(true);
  }
};
// isEqualSlices(11, 5, 3);
// isEqualSlices(8, 3, 2);
// isEqualSlices(8, 3, 3);
// isEqualSlices(24, 12, 2);
// 11. XO----------------------------------------------
const isEqualNumXandOs = (str) => {
  let xZahl = 0;
  let oZahl = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase()[i] === "x") {
      xZahl++;
    } else if (str.toLowerCase()[i] === "o") {
      oZahl++;
    }
  }
  if (oZahl === xZahl) {
    console.log(true);
  } else if (!str.includes("x") && str.includes("o")) {
    console.log(false);
  } else if (str.includes("x") && !str.includes("o")) {
    console.log(false);
  } else if (str.indexOf("x") === -1 && str.indexOf("o") === -1) {
    console.log(true);
  } else if (oZahl != xZahl) {
    console.log(false);
  }
};
// isEqualNumXandOs("ooxx");
// isEqualNumXandOs("xooxx");
// isEqualNumXandOs("ooxXm");
// isEqualNumXandOs("zpzpzpp");
// isEqualNumXandOs("zzoo");
// 12. isPrime?--------------------------------------------------
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));
