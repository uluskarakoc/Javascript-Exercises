// Create your solutions here
let i = 1;
function result() {
  console.log(`Result ${i++}`);
}
result();
// #### 1. Los oder New?
const nameOfCity = (n) => {
  if (
    n.slice(0, 3).toLowerCase() === "los" ||
    n.slice(0, 3).toLowerCase() === "new"
  ) {
    return n;
  } else {
    return `The city name does not begin with Los or New`;
  }
};
console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("London"));
// #### 2. isDivisible?
result();
const isDivisible = (n) => {
  if (n % 100 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));
// #### 3. Wie ist das Wetter?
result();
const isRaining = (n) => {
  console.log(
    `${
      n
        ? "wet day - you need an umbrella"
        : "dry day - leave your umbrella at home"
    }`
  );
};
isRaining(true);
isRaining(false);
// ### Schleifen

// #### 1. Sequenz
result();
const geometricalSequence = (n) => {
  let sequenz = "";
  for (let i = 0; i < n; i++) {
    sequenz += Math.pow(2, i) + " ";
  }
  return sequenz;
};
console.log(geometricalSequence(5));
console.log(geometricalSequence(10));

// #### 2. Vielfaches
result();
const multiplesOfThree = (n) => {
  let multiples = [];
  for (let i = 1; i <= n; i++) {
    if (n >= 1) {
     
    multiples.push(3*i)

    } else if (n < 1) {
      console.log("Invalid input");
    }
  }
  return multiples.join(" ")
};
console.log(multiplesOfThree(5));
console.log(multiplesOfThree(10));



// #### 1. Du hast die Macht
result();
const powerOf = (n) => {
  return Math.pow(n, n);
};
console.log(powerOf(3));
console.log(powerOf(4));
// #### 1. Wie viele?

result();
const vowelCount = (n) => {
  let count = 0;
  const vowel = n.split("");
  for (i = 0; i < vowel.length; i++)
    if (
      vowel[i].includes("u") ||
      vowel[i].includes("a") ||
      vowel[i].includes("o") ||
      vowel[i].includes("e")
    ) {
      count++;
    }
  return count;
};
console.log(vowelCount("buchholz"));
