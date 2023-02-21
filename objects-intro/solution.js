let i = 1;
const result = () => console.log(`Result ${i++}`);
// 1-----------
result();
const person = {
  name: "Alice",
  age: 25,
  occupation: "teacher",
};
console.log(person.name);
console.log(person.age);
console.log(person.occupation);
// 2-----------
result();
const objektLernen = (n) => {
  console.log(person[n]);
};
objektLernen("age");
objektLernen("name");
// 3-----------
result();
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  pages: 214,
};

const satz = () => {
  return `The Book ${book.title} was written ${book["author"]} and has ${book["pages"]} pages.`;
};
console.log(satz());
// 4-----------
result();
const student = {
  name: "alex",
  info: {
    age: 43,
    email: "alex@mail.com",
  },
  subjects: ["programming basics", "ui basics"],
  teachers: [
    { name: "max", email: "max@mail.com", isFavorite: false },
    { name: "mo", email: "mo@mail.com", isFavorite: false },
    { name: "mina", email: "mina@mail.com", isFavorite: true },
  ],
};
let lehrerEmails = [];
console.log(`1 Der name des Students ist ${student["name"]}`);
console.log(`2 Die Email des Students ist ${student["info"]["email"]}`);
console.log(
  `3 Der Name des ersten Lehrers im teachers ist ${student.teachers[0]["name"]}`
);
console.log(`4 Student hat ${student.subjects.length} Fächer`);
lehrerEmails.push(
  student.teachers[0]["email"],
  student.teachers[1]["email"],
  student.teachers[2]["email"]
);
console.log(`5 Die Emails aller Lehrer sind ${lehrerEmails}`);
console.log(
  `6 Die Email des Lieblingslehrers des Students ist ${student.teachers[2]["email"]}`
);
// 5-----------
result();
const pets = [
  { name: "Fluffy", type: "cat" },
  { name: "Spot", type: "dog" },
  { name: "Goldie", type: "fish" },
];

const alleWerte = () => {
  let tiere = [];
  for (let i = 0; i < pets.length; i++) {
    tiere.push(pets[i]["name"]);
  }
  return tiere.join(", ");
};
console.log(alleWerte());
// 6-----------
result();
const car = {
  model: "Toyota",
  color: "red",
  year: 2010,
};
const hasProperty = (a, b) => {
  if (a.includes("b")) {
    return true;
  } else {
    return false;
  }
};
console.log(hasProperty("car", "Toyota"));
// console.log(hasProperty("car", "blabla"));
// 7-----------
result();
const user1 = {
  name: "max",
  yearBorn: 1990,
  contentRights: ["user", "admin", "moderator"],
  password: "1234",
};

const user2 = {
  name: "mo",
  yearBorn: 2001,
  contentRights: ["user"],
  password: "asdfj)ölkj!",
};

const user3 = {
  name: "mina",
  yearBorn: 1951,
  contentRights: ["user", "moderator"],
  password: "abc",
};

// 1. Welcher user im Array hat das längste Passwort?
const users = [user1, user2, user3];
let num = [];
for (i = 0; i < users.length; i++) {
  num.push(Math.max(users[i]["password"].length));
}
console.log(`1 Längste Passwort ist ${Math.max(...num)}`);

// 2. Welcher user im array ist am ältesten?
let year = [];
for (i = 0; i < users.length; i++) {
  year.push(users[i]["yearBorn"]);
}
console.log(`2 am ältesten ist ${Math.min(...year)}`);
// 3. Gibt es einen user im array der ein passwort hat was kürzer ist als 4 buchstaben der/die admin ist?
const paswort = () => {
  for (i = 0; i < users.length; i++) {
    if (users[i]["password"].length < 4) {
      return users[i]["name"];
    }
  }
};
console.log(paswort())
