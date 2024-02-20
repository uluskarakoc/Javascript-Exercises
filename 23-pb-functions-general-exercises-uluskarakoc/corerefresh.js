let i = 1;
let result = () => console.log("Result " + i++);
result();
// 1. -----------------
const triplet = (x) => {
  //   console.log(x + x + x);
  console.log(x.repeat(30));
};
triplet("cat");
// 2. -------------------
result();
const quintuplet = (x) => {
  console.log(x.repeat(5));
};
quintuplet("dog");
// 3. ----------
result();
// const multiStr = (x, y) => {
//   console.log(y.repeat(x));
// };
// multiStr(3, "Woah");
const multiStr = (x, y) => {
  let out = "";
  for (let i = 0; i < x; i++) {
    out += y;
  }
  return out;
};
console.log(multiStr(3, "Woah"));
// 4. -----------
const arr = [1, 6, 83, 91, 0, -4, 1337, 5];
let max = 0;
const largestNumInArray = (x) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
};
console.log(largestNumInArray(arr));

// 5. Diese Aufgabe hat 2 Teile---------

// Teil a) -----------

// Teil b)-----------

// 6. ---------

// soruuuuuuu bunu returnle nasil yazariz.

// 7.------------

// 8.-----------------

// 9. -----------------

// 10. ---------------------

// 11.-----------------------

// 12.---------------------

// 13. -------------------

// 14.-------------------
// soruuuuuuuuuuuuu burada neden typeof x === "string" yerine x.split li bisey yazdik ve x.split ne demek

// 15.---------------

// 16----------------------
