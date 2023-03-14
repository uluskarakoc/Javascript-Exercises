let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};

// ## 1. Was ist das Ergebnis, wenn du diesen Code ausführst und warum?
result();
function closureOne() {
  const a = 1;
  console.log(a);
  console.log(foo());
  function foo() {
    return 2;
  }
}
closureOne();

// ## 2. What is the result?
result();
let a = 1;

function closureTwo(number) {
  function inner(input) {
    return a;
  }
  a = 5;

  return inner;
}

const resultOfClosureTwo = closureTwo(9);
const result1 = resultOfClosureTwo(2);
console.log(result1);

// ## 3. What is the result of the following code? Explain your answer.
result();
const fullname = "John Doe";
const user = {
  fullname: "Colin Ihrig",
  name: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};
console.log(user.name.getFullname());

const test = user.name.getFullname;
console.log(test());

// ## 4. What will you see in the console for the following example?
result();
let interesting = 1;
function doSomeStuff() {
  interesting = 10;
  return function interesting() {
  
  }
  
  
}
doSomeStuff();
console.log(interesting);
