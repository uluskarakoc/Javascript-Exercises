let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};

// **1. Get properties.**
result();
const getProperties = (obj) => {
  return Object.keys(obj);
};
console.log(getProperties({ name: "Mike", class: "4A", course: "English" }));
// **2. Get values.**
result();
const getValues = (obj) => {
  return Object.values(obj);
};
console.log(getValues({ choice1: "tea", choice2: "coffee", choice3: "milk" }));
// **4. Convert keys and values into objects.**
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

const getKeyValueObjects = () => {
  const outArray = [];
  for (v in person) {
    const neuObj = {};
    neuObj[v] = person[v];
    outArray.push(neuObj);
    // console.log(person[v]);
  }
  return outArray;
};
console.log(getKeyValueObjects());
