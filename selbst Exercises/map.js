let i=1;
const result=()=>{console.log(`Result🥊🥊🥊🥊🥊🥊${i++}`)}
// Using forEach() on sparse arrays
result()
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]
result()
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
  // [ 4, 9, 16 ]
result()
console.log(
    [1, , 3].map((x, index) => {
      console.log(`Visit ${index}`);
      return x * 2;
    }),
  );
  // Visit 0
  // Visit 2
  // [2, empty, 6]
result()
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});
console.log(filteredNumbers);
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]



  

  

  