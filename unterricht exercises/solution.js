


let array=['CSS', 'HTML', 'JavaScript']
console.log(array) //[ 'CSS', 'HTML', 'JavaScript' ]


const copySortedDesc=(arr)=>{
    return arr.sort((a,b)=>b.localeCompare(a))

}
console.log(copySortedDesc(array)); //[ 'JavaScript', 'HTML', 'CSS' ]

// console.log("sortedArray:", sortedArray); // aufsteigend sortiert: [ 'CSS', 'HTML', 'JavaScript' ]
// console.log("ursprüngliches wordsArray", wordsArray ); // bleibt unverändert

// Bonus: Sortier das Array absteigend. Erstelle hierzu eine neue Funktion namens copySortedDesc
// Tipp: Du kannst mit if Anweisungen und < und > arbeiten
// oder du verwendest `localeCompare` (siehe wissen)

//  let sortedArray = copySorted(wordsArray); 
const fn= ()=>{}
console.log(typeof fn);

const animal={
    type:"cat",
    name:"kara"
}
console.log(animal.age);