let i = 1;
function result() {
  console.log(`Result ${i++}`);
}
result();
// # EXERCISE 1
const area = (...args) => {
  return 4 * 6;
};
console.log(area());
// # EXERCISE 2

result();
const crazySum = (a, b) => {
  if (a === b) {
    return (a + b) * 3;
  }
};
console.log(crazySum(3, 3));
// # EXERCISE 3
result();
const crazyDiff = (n) => {
  let variable = Math.abs(n - 19);
  if (n > 19) {
    return 3 * variable;
  } else {
    return n;
  }
};
console.log(crazyDiff(100));
// # EXERCISE 4
result();
const strivify = (s) => {
  if (s.slice(0, 6) === "Strive") {
    return s;
  } else {
    return "Strive" + s;
  }
};
console.log(strivify("ulus"));
// # EXERCISE 5
result();
const check3and7=(n)=>{
  if(n%3===0){
    return true
  }else if(n%7===0){
    return `2 mal ${true}`
  }else{
    return `sayisinin kendisi ${n}`
  }
}
console.log(check3and7(28))
// # EXERCISE 6
result();
const reverseString=(n)=>{return n.split("").reverse().join("")} 
console.log(reverseString("ulus"))

