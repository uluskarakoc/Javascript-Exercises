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
countOccurrences("this is a string", "i");
countOccurrences("ulus Karakoc", "u");
