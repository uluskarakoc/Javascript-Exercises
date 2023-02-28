let i=1;
const start =()=>{console.log(`Result*****${i++}`);}
const end =()=>{console.log("-".repeat(20));}
start()
// #### 1. Kombinieren von Arrays
let euroCountries=["Germany","France"]
let asianCountries=["Japan","Korea"]
let arr=euroCountries.push(asianCountries)
console.log(euroCountries);
let euroCities=["Berlin","Paris"]
let asiaCities=["Tokyo","Seoul"]
let worldCities=[...euroCities,...asiaCities]
console.log(worldCities);

end()