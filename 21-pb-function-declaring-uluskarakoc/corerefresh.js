// #### 1. Multiplizieren - Funktionsdeklaration
let i = 1;
const result = () => {
  console.log(`Result****${i++}`);
};
result();
function multiply(a, b) {
  console.log(a * b);
}
multiply(4, 9);

// #### 2. Multiplizieren - Funktionsdeklaration als Wert
result();

const myMultiply = function multiply(a, b) {
  console.log(a * b);
};
myMultiply(4, 9);

// #### 3. Multiply - Arrow Function
result();

const myMultiplyFunc = (a, b) => {
  console.log(a * b);
};
myMultiplyFunc(4, 10);
// #### 4. Deklarationen
result();

function remainderOfDivision1(a, b) {
  console.log(a / b);
}

const remainderOfDivision2 = function remainderOfDivision1(a, b) {
  console.log(a / b);
};

const remainderOfDivision3 = (a, b) => {
  console.log(a / b);
};
remainderOfDivision1(100 / 5, 3);
remainderOfDivision2(147, 3);
remainderOfDivision3(124, 8);
