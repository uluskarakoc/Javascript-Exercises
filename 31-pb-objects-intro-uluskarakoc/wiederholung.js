let i=1;
const result=()=>{console.log(`Result ${i++}`)}

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


