let i = 1;
const start = () => {
  console.log(`Result*****${i++}`);
};
const end = () => {
  console.log("-".repeat(20));
};
start();
// #### 1. Kombinieren von Arrays
let euroCountries = ["Germany", "France"];
let asianCountries = ["Japan", "Korea"];
let arr = euroCountries.push(asianCountries);
console.log(euroCountries);
let euroCities = ["Berlin", "Paris"];
let asiaCities = ["Tokyo", "Seoul"];
let worldCities = [...euroCities, ...asiaCities];
console.log(worldCities);
end();
start();
// #### 2. Copying Arrays
let newArr = [...asiaCities];
console.log(newArr);
end();
// #### 3. Find the Largest
start();
let number = [1, 4, 45, 80, 300];
const findLargestNumber = (arr) => {
  return Math.max(...arr);
};
console.log(findLargestNumber(number));
end();
// #### 4. Find the Smallest
start();
const findSmallestNumber = (arr) => {
    return Math.min(...arr);
  };
  console.log(findSmallestNumber(number));
end();
// #### 5. Clone and Merge
start()
const person = {name: "John"}
const job = {role: "Teacher"}
// 5.1
let newObj={...person}
console.log(newObj);
end();
// 5.2
let employee={...person,...job}
console.log(employee);
end();
// 5.3
job.role="Plumber"
console.log(job);
console.log(employee);
end()



