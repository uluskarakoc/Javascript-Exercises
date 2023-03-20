let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};
result();
// ## Task 1 - Key Value Pairs
const profileData = {
  firstName: "Kerim",
  lastName: "Has",
  age: 40,
  city: "Moskova",
  details: function () {
    return `${this.firstName} ${this.lastName} is ${this.age}years old and lives in ${this.city}`;
  },
};
// ## Aufgabe 2 - Objektmethode
result();
console.log(profileData.details());
// ## Aufgabe 3 - Wortkonverter
result();
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
const wordConverter = (words, suffix) => {
  for (let i = 0; i < words.length; i++) {
   console.log(words[i] + suffix);   
  }
};
wordConverter(adjectives, "er");
