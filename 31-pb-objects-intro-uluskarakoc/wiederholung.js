let i = 1;
const result = () => {
  console.log(`Result*********${i++}`);
};

// # PB-Objects-Intro
// 1. Benutze die dot notation um die einzelnen Werte des Objektes auszugeben.
result();
const person = {
  name: "Alice",
  age: 25,
  occupation: "teacher",
};
console.log(person.name);
console.log(person.age);
console.log(person.occupation);

// 2. Schreibe eine Funktion die einen String animmt und die dazugehörigen Werte des person Objekts ausgibt.
result();
const getProp = (str) => {
  console.log(person[str]);
};
getProp("name");
getProp("age");

// 3. Schreibe eine Funktion die dieses Objekt in einen Satz umwandelt.
result();
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  pages: 214,
};
const makeSentence = () => {
  console.log(
    `The Book ${book.title} was written by ${book["author"]}J and has ${book["pages"]}.`
  );
};
makeSentence();

//   4. Du hast folgendes Objekt:
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
// Schreib code um folgende Sachen herauszufinden:
// 1. Was ist der Name des Students?
console.log(`${student["name"]}`);
// 2. Was ist die Email des Students?
console.log(`${student["info"]["email"]}`);
// 3. Was ist der Name des ersten Lehrers im teachers Array?
console.log(`${student["teachers"][0]["name"]}`);
// 4. Wie viele Fächer (subjects) hat der Student?
console.log(`${student["subjects"].length}`);
// 5. Bau ein Array mit den Emails aller Lehrer im teachers array.
let emails = [];
for (let i = 0; i < student.teachers.length; i++) {
  emails.push(student.teachers[i].email);
}
console.log(emails);
// 6. Was ist die Email des lieblingslehrers des Students?
for (let i = 0; i < student.teachers.length; i++) {
  if (student.teachers[i].isFavorite === true) {
    console.log(student["teachers"][i]["email"]);
    break;
  }
}

// 5. Schreibe eine Funktion die alle Werte des Properties "name" der Objekte im Array ausgibt.
result();
const pets = [
  { name: "Fluffy", type: "cat" },
  { name: "Spot", type: "dog" },
  { name: "Goldie", type: "fish" },
];
let names = [];
for (let i = 0; i < pets.length; i++) {
  names.push(pets[i].name);
}
console.log(names.join(", "));

// Bonus 1: Schreibe eine Funktion namens hasProperty, die zwei Parameter benötigt: ein Objekt und einen String. Die Funktion sollte true zurückgeben, wenn das Objekt eine Eigenschaft mit demselben Namen wie der String hat, und andernfalls false.
result();
const car = {
  model: "Toyota",
  color: "red",
  year: 2010,
};
// Erste Lösung
const hasProperty = (Objekt, String) => {
  return Object.hasOwn(Objekt, String);
};
// Zweite Lösung
// const hasProperty=(Objekt,String)=>{
//     return Objekt[String] !== undefined;
//     }
console.log(hasProperty(car, "model"));
console.log(hasProperty(car, "price"));

// Bonus 2:
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

// Schreibe Code um folgende Fragen zu beantworten:
// 1. Welcher user im Array hat das längste Passwort?
result();
let longPasswortUserName = "";
let longPasswort = "";
for (let i = 0; i < users.length; i++) {
  if (users[i].password.length > longPasswort.length) {
    longPasswort = users[i].password;
    longPasswortUserName = users[i].name;
  }
}
console.log(longPasswortUserName);
// 2. Welcher user im array ist am ältesten?
result();
let zahl = 2023;
let oldestAlt = "";
let olderName = "";
for (let i = 0; i < users.length; i++) {
  if (users[i].yearBorn < zahl) {
    oldestAlt = users[i].yearBorn;
    olderName = users[i].name;
  }
}
console.log(olderName);
// 3. Gibt es einen user im array der ein passwort hat was kürzer ist als 4 buchstaben der/die admin ist?
result();
const passwordfrage = () => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].password.length < 4 &&
      users[i].contentRights.includes("admin")
    ) {
    }
   return users[i].name;
  }
};
console.log(passwordfrage())

// soruuuu bunu sadece for döngüsü ile console ile nasil yazarim?
