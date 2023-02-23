// Gib die niedrigste Zahl zwischen -1 und 4 aus.
const niedrigste = Math.min(-1, 0, 1, 2, 3);
console.log(niedrigste);

// Gib die höchste Zahl zwischen -1 und 4 aus.
const höchste = Math.max(-1, 0, 1, 2, 3);
console.log(höchste);

// Runde jede der folgenden Zahlen auf die nächste ganze Zahl auf. Gib jedes Ergebnis in der Konsole aus.
const zahlauf1 = 3321.32321;
const rundeZah1 = Math.ceil(zahlauf1)

const zahlauf2 = 326.76;
const rundeZah2 = Math.ceil(zahlauf2)

const zahlauf3 = 76788.7;
const rundeZah3 = Math.ceil(zahlauf3)

const zahlauf4 = -9.78;
const rundeZah4 = Math.ceil(zahlauf4)

const zahlauf5 = 43.342;
const rundeZah5 = Math.ceil(zahlauf5)

console.log(rundeZah1,rundeZah2,rundeZah3,rundeZah4,rundeZah5)

// Runde jede der folgenden Zahlen auf die nächste ganze Zahl ab. Gib jedes Ergebnis in der Konsole aus.
const zahl1 = 3321.32321;
const rundeZahl1 = Math.floor(zahl1)

const zahl2 = 326.76;
const rundeZah22 = Math.floor(zahl2)

const zahl3 = 76788.7;
const rundeZahl3 = Math.floor(zahl3)

const zahl4 = -9.78;
const rundeZahl4 = Math.floor(zahl4)

const zahl5 = 28.329;
const rundeZahl5 = Math.floor(zahl5)

console.log(rundeZahl1,rundeZah22,rundeZahl3,rundeZahl4,rundeZahl5)

// Gib eine zufällige ganze Zahl zwischen 1 und 6 aus.
randomZahl =(Math.floor((Math.random()*6)))
console.log(randomZahl)
