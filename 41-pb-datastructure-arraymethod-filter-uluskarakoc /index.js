let i = 1;
const result = () => {
  console.log(`Result--------------${i++}`);
};
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1
result()
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
function filterRange(arr, a, b) {
  return arr.filter(num => num>=a && num<=b)
}
 console.log( filtered ); 
//  console.log( arr ); 




//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
result()
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1); 
      i--; 
    }
  }
}


let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4

console.log( array ); // [3, 1]