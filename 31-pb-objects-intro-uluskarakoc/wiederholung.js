let i=1;
const result=()=>{console.log(`Result*********${i++}`)}

// # PB-Objects-Intro
// 1. Benutze die dot notation um die einzelnen Werte des Objektes auszugeben.
result()
const person = {
    name: "Alice",
    age: 25,
    occupation: "teacher"
  };
console.log(person.name); 
console.log(person.age); 
console.log(person.occupation); 

// 2. Schreibe eine Funktion die einen String animmt und die dazugehörigen Werte des person Objekts ausgibt.
result()
const getProp=(str)=>{
 console.log(person[str]); 
}
getProp("name")
getProp("age")

// 3. Schreibe eine Funktion die dieses Objekt in einen Satz umwandelt.
result()
const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 214
  };
  const makeSentence=()=>{
    console.log(`The Book ${book.title} was written by ${book["author"]}J and has ${book["pages"]}.`)
  }
  makeSentence()

//   4. Du hast folgendes Objekt:
result()
const student = {
    name: "alex",
    info: {
        age: 43,
        email: "alex@mail.com"
    }, 
    subjects: ["programming basics", "ui basics"],
    teachers: [
        {name: "max", email: "max@mail.com", isFavorite: false},
        {name: "mo", email: "mo@mail.com", isFavorite: false},
        {name: "mina", email: "mina@mail.com", isFavorite: true}
 ]
}
// Schreib code um folgende Sachen herauszufinden:
// 1. Was ist der Name des Students?
console.log(`${student["name"]}`)
// 2. Was ist die Email des Students?
console.log(`${student["info"]["email"]}`)
// 3. Was ist der Name des ersten Lehrers im teachers Array?
console.log(`${student["teachers"][0]["name"]}`)
// 4. Wie viele Fächer (subjects) hat der Student?
console.log(`${student["subjects"].length}`)
// 5. Bau ein Array mit den Emails aller Lehrer im teachers array. 
let emails=[]
for(let i=0;i<student.teachers.length;i++){
    emails.push(student.teachers[i].email)
}
console.log(emails)
// 6. Was ist die Email des lieblingslehrers des Students? 
for(let i=0;i<student.teachers.length;i++){
     if(student.teachers[i].isFavorite ===true){
        console.log(student["teachers"][i]["email"])
       break;  
     }
}













