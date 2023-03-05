let i=1;
const result=()=>{console.log(`Result----------------${i++}`)}
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
//***MAP***
//1. Get array of all names
result()
const allNames =characters.map(n=>{return n.name})
console.log(allNames)
//2. Get array of all heights
result()
const allHeights =characters.map(n=>n.height).sort((a,b)=>a-b)
console.log(allHeights)
//3. Get array of objects with just name and height properties
result()
const heightAndNames =characters.map((n)=>{ return n.name +" "+ n.height})
console.log(heightAndNames)
//4. Get array of all first names
result()
const firstNames =characters.map((n)=>{return n.name.slice(0,6)})
console.log(firstNames)
//***FILTER***
//1. Get characters with mass greater than 100
result()
const mass=characters.filter(n=>n.mass>100)
console.log(mass);
//2. Get characters with height less than 200
result()
const height=characters.filter(n=>n.height<200)
console.log(height);
//3. Get all male characters
result()
const male=characters.filter(n=>n.gender==="male")
console.log(male);
//4. Get all female characters
result()
const female=characters.filter(n=>n.gender==="female")
console.log(female);

