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
