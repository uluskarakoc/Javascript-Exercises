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
