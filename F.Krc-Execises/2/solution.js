let i = 1;
const result = () => {
  console.log(`Result----------------${i++}`);
};
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
//***MAP***
//1. Get array of all names
result();
const allNames = characters.map((n) => {
  return n.name;
});
console.log(allNames);
//2. Get array of all heights
result();
const allHeights = characters.map((n) => n.height).sort((a, b) => a - b);
console.log(allHeights);
//3. Get array of objects with just name and height properties
result();
const heightAndNames = characters.map((n) => {
  return [n.name + " " + n.height];
});
console.log(heightAndNames);
//4. Get array of all first names
result();
const firstNames = characters.map((n) => {
  return n.name.slice(0, 6);
});
console.log(firstNames);
//***FILTER***
//1. Get characters with mass greater than 100
result();
const mass = characters.filter((n) => n.mass > 100);
console.log(mass);
//2. Get characters with height less than 200
result();
const height = characters.filter((n) => n.height < 200);
console.log(height);
//3. Get all male characters
result();
const male = characters.filter((n) => n.gender === "male");
console.log(male);
//4. Get all female characters
result();
const female = characters.filter((n) => n.gender === "female");
console.log(female);
//***SORT***
//1. Sort by mass
result();
const massSort = characters.map((n) => n.mass).sort((a, b) => a - b);
console.log(massSort);
//2. Sort by height
result();
const heightSort = characters.map((n) => n.height).sort((a, b) => a - b);
console.log(heightSort);
//3. Sort by name
result();
const nameSort = characters
  .map((n) => n.name)
  .sort((a, b) => a.localeCompare(b));
console.log(nameSort);
//4. Sort by gender
result();
const genderSort = characters
  .map((n) => n.gender)
  .sort((a, b) => a.localeCompare(b));
console.log(genderSort);
//***SOME***
//1. Is there at least one male character?
result();
const maleSome = characters.some((n) => n.gender === "male");
console.log(maleSome);
//2. Is there at least one character with blue eyes?
result();
const blueEyes = characters.some((n) => n.eye_color === "blue");
console.log(blueEyes);
//3. Is there at least one character taller than 210?
result();
const taller = characters.some((n) => n.height > 210);
console.log(taller);
//4. Is there at least one character that has mass less than 50?
result();
const massSome = characters.some((n) => n.mass < 50);
console.log(massSome);
//***EVERY***
//1. Does every character have blue eyes?
result();
const blueEyesEvery = characters.every((n) => n.eye_color === "blue");
console.log(blueEyesEvery);
//2. Does every character have mass more than 40?
result();
const massEvery = characters.every((n) => n.mass > 40);
console.log(massEvery);
//3. Is every character shorter than 200?
result();
const heightEvery = characters.every((n) => n.height < 200);
console.log(heightEvery);
//4. Is every character male?
result();
const genderEvery = characters.every((n) => n.gender === "male");
console.log(genderEvery);
//***REDUCE***
result();

//1. Get total mass of all characters
const massReduce = characters.reduce((acc, curr) => {
  return acc + curr.mass;
}, 0);
console.log(massReduce);
//2. Get total height of all characters
result();
const heightReduce = characters.reduce((acc, curr) => {
  return acc + curr.height;
}, 0);
console.log(heightReduce);

//3. Get total number of characters by eye color
result();
const eyeReduce = characters.reduce((a, c) => {
  a[c.eye_color] ? a[c.eye_color]++ : (a[c.eye_color] = 1);
  return a;
}, {});
console.log(eyeReduce);
//4. Get total number of characters in all the character names
result();
const namesReduce = characters.reduce((a, c) => {
  a[c.name] ? a[c.name]++ : (a[c.name] = 1);
  return a;
}, {});
console.log(namesReduce);
