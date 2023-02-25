let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};

/**
 * Implement your solutions here
 */

// 1. Get Properties
result();
const getProperties = {
  name: "Mike",
  class: "4A",
  course: "English",
};
const keys = (obj) => {
  return Object.keys(obj);
};
console.log(keys(getProperties));
// 2. Get Values
result();
const values = { choice1: "tea", choice2: "coffee", choice3: "milk" };
const getValues = (v) => {
  return Object.values(v);
};
console.log(getValues(values));
// 3. Convert Keys and Values into arrays
result();
const KeyValuePairs = { cats: 1, dogs: 2, turtles: 4 };
const getKeyValuePairs = (o) => {
  return Object.entries(o);
};
console.log(getKeyValuePairs(KeyValuePairs));
// 4. Convert keys and values into objects
result();
let person = {
  firstName: "Michael",
  lastName: "Smith",
  citizenship: "Germany",
  city: "Berlin",
  gender: "male",
  job: "driver",
  age: 28,
  height: 178,
  "eye colour": "brown",
};
const outArray = [];
const getKeyValueObjects = () => {
  for (u in person) {
    const innerObject = {};
    innerObject[u] = person[u] ;
    // soruuuuuuuuuu consol da sadece valuler gözükmeli degilmiydi??
    // soruuuuuuuuuuu person la innerobject eiliginde siralama degisince neden calismadi???
    // console.log(person[u])
    // console.log(u)
    outArray.push(innerObject);
  }
  return outArray;
};
console.log(getKeyValueObjects());

// 5. Add A Method

// 6. Merge

/**
 * Bonus Questions
 */

// 7. What happens if you merge two objects with the same property values?
// Do you expect to change either or both of the original objects by combining these two objects?
// Why or why not? Comment your answers.

// 8. Switch Keys and Values

// 9 Return Keys and Values
