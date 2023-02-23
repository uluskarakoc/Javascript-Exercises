// **Anweisungen**
// 1. Deklariere eine Variable mit dem Namen `myArray` und speichere ein Array mit 5 Elementen. Gib das Array aus.
const myArray =["Lauchzwiebeln",32,"Bohnen","Kürbis"]

// 2. Greife auf das dritte Element im Array zu und speichere es in einer anderen Variablen mit dem Namen `thirdElement`. Drucke das `thirdElement` aus.
const thirdElement= myArray[3];
console.log(`Hier ist drite element ${thirdElement}`)

// 3. Weise das vierte Element des Arrays neu zu und gib ihm den Wert "fourth element". Drucke das Array noch einmal aus.
const neuElement =myArray.push("fourth element")
console.log(myArray)
console.log(`Vierte element ist fourth element ${neuElement}`)