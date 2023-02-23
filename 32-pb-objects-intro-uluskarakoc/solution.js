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
// 4.1.
console.log(`1 Der name des Students ist ${student["name"]}`);
// 4.2.
console.log(`2 Die Email des Students ist ${student["info"]["email"]}`);
// 4.3.
console.log(
  `3 Der Name des ersten Lehrers im teachers ist ${student.teachers[0]["name"]}`
);
// 4.4.
console.log(`4 Student hat ${student.subjects.length} Fächer`);
// 4.5.
let lehrerEmails = [];
lehrerEmails.push(
  student.teachers[0]["email"],
  student.teachers[1]["email"],
  student.teachers[2]["email"]
);
// diger cözüm 4’ün 5'i
// let arr = [];
// for (let i = 0; i < student.teachers.length; i++) {
//     arr.push(student.teachers[i].email)
// }
// console.log(arr);
console.log(`5 Die Emails aller Lehrer sind ${lehrerEmails}`);
// 4.6.
console.log(`6 Die Email des Lieblingslehrers des Students ist ${student.teachers[2]["email"]}`);
// asil cözüm asagidaki
for (let i = 0; i < student.teachers.length; i++) {
  if (student.teachers[i].isFavorite) {
      console.log(student.teachers[i].email);
  }
}

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
const hasProperty = (obj, prop) => {
  return obj[prop] !== undefined;
}
console.log(hasProperty(car, "model")); // true
console.log(hasProperty(car, "price")); // false
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
const users = [user1, user2, user3];

// 1. Welcher user im Array hat das längste Passwort?
// let num = [];
// for (i = 0; i < users.length; i++) {
//   num.push(Math.max(users[i]["password"].length));
// }
// console.log(num)
// console.log(`1 Längste Passwort ist ${Math.max(...num)}`);
let longestPasswordName = ""
let longestPassword = ""
for(let i = 0; i<users.length; i++){
    if(users[i].password.length > longestPassword.length){
        longestPassword = users[i].password;
        longestPasswordName = users[i].name;
    }
}
console.log(longestPasswordName);

// 2. Welcher user im array ist am ältesten?
// let year = [];
// for (i = 0; i < users.length; i++) {
//   year.push(users[i]["yearBorn"]);
// }
// console.log(`2 am ältesten ist ${Math.min(...year)}`);
let oldestUserName= ""
let oldestYear = 2023
for(let i = 0; i<users.length; i++){
    if(users[i].yearBorn < oldestYear){
        oldestYear = users[i].yearBorn;
        oldestUserName = users[i].name;
    }
}
console.log(oldestUserName)
// 3. Gibt es einen user im array der ein passwort hat was kürzer ist als 4 buchstaben der/die admin ist?
const passwort = () => {
  for (i = 0; i < users.length; i++) {
    if (users[i]["password"].length < 4 && users[i].contentRights.includes("admin")) {
      
    }
     return users[i]["name"];
  }
};
console.log(passwort())
