// let array=['CSS', 'HTML', 'JavaScript']
// console.log(array) //[ 'CSS', 'HTML', 'JavaScript' ]

// const copySortedDesc=(arr)=>{
//     return arr.sort((a,b)=>b.localeCompare(a))

// }
// console.log(copySortedDesc(array)); //[ 'JavaScript', 'HTML', 'CSS' ]

// // console.log("sortedArray:", sortedArray); // aufsteigend sortiert: [ 'CSS', 'HTML', 'JavaScript' ]
// // console.log("ursprüngliches wordsArray", wordsArray ); // bleibt unverändert

// // Bonus: Sortier das Array absteigend. Erstelle hierzu eine neue Funktion namens copySortedDesc
// // Tipp: Du kannst mit if Anweisungen und < und > arbeiten
// // oder du verwendest `localeCompare` (siehe wissen)

// //  let sortedArray = copySorted(wordsArray);
// const fn= ()=>{}
// console.log(typeof fn);

// const animal={
//     type:"cat",
//     name:"kara"
// }
// console.log(animal.age);
// console.log(Math.PI);
// console.log(process);
// console.log(window);
// console.log("HALLO WELT!!!!!!")
// window.alert("lernen lernen lernen")

// const x = prompt("setze x");
//  console.log("ich habe x gesetzt als: ", x);

// Schreibe ein Programm was so lange prompts ausgibt bis der User endlich "hallo welt" eingibt.
// let done = false;
// while(done === false){
//     let userEingabe = prompt("bitte gib was ein: ");
//     if(userEingabe === "hallo welt"){
//         done = true; 
//     }
// }

// console.log(document.children[0].children[1].children[0].innerHTML);
document.children[0].children[1].children[0].innerHTML="Bismillahirrahmanirrahim"


let header = document.getElementById("header")
// console.log(header.innerHTML);


const meinHeader=document.querySelector("h1")
// console.log(meinHeader);

const allHeader=document.querySelectorAll("h1")
console.log(allHeader);

allHeader[0].style.color="orange"

document.querySelector("body").style.backgroundColor="gold"
document.getElementById("deneme").style.color="green"
document.querySelector("h3").style.fontSize="5rem"
document.querySelector("h3").style.color="white"
