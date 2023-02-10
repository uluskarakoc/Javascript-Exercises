// #### 1. Multiplizieren - Funktionsdeklaration
function multiply(a,b) {
    console.log(a*b)
}
multiply(8,4)


// #### 2. Multiplizieren - Funktionsdeklaration als Wert
const myMultiply = function (a,b) {
    console.log(a*b)
}
myMultiply(8,4)


// #### 3. Multiply - Arrow Function
const myMultiplyFunc = (a,b) => {console.log(a*b)}
myMultiplyFunc(80,10)

// #### 4. Deklarationen
function remainderOfDivision1(a,b) {
    console.log(a%b)
}
remainderOfDivision1(40,7)

const remainderOfDivision2 = function (a,b) {
    console.log(a%b)
}
remainderOfDivision2(33,7)

const remainderOfDivision3 = (a,b) => {console.log(a%b)}
remainderOfDivision3(100,11)