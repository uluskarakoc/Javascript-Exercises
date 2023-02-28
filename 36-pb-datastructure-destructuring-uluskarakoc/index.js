let i = 1;
const result = () => {
  console.log(`Result***********${i++}`);
};
result();
// #### 1. Array-Destructuring
let [fruit, vegetable, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];
console.log(food);

result();
// #### 2. Object Destructuring
let { fran, martina, camille } = {
  fran: "monster",
  martina: "ghost",
  camille: "witch",
};
console.log(fran);
result();
// #### 3. Parameters: Object Destructuring
let musician = {
  name: "ulus",
  hit: "simarik",
  nationality: "georgian",
};
const displayMusicianDetails = (obj) => {
  let { name, hit, nationality } = obj;
  return `${name} hat am greatest hit name ${hit} aus ${nationality} `;
};
console.log(displayMusicianDetails(musician));
