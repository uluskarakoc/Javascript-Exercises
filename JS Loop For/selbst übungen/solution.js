let zahlen = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- Schreiben Sie der Quadratwurzel jedes Element in der Zahlen?
for (let i = 0; i < zahlen.length; i++) {
  console.log(`1---${zahlen[i] * zahlen[i]}`);
}

for (let zahl of zahlen) {
  console.log(zahl * zahl);
}

// 2- Welche Zahlen ist 5 mal große von 5 auf dem Zahlenlist
for (let zahl = 0; zahl < zahlen.length; zahl++) {
  if (zahlen[zahl] % 5 == 0) {
    console.log(`2---${zahlen[zahl]}`);
  }
}

// 3- Finden Sie die summe der gerade Zahlen auf dem Zahlen list
for (let ulus = 0; ulus < zahlen.length; ulus++) {
  if (zahlen[ulus] % 2 == 0) {
    console.log(`3---gerade zahlen sind ${zahlen[ulus]}`);
  }
}

let produkte = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20",
];

// 4-Drucken Sie alle Produkte in der Produktliste mit einem Großbuchstaben.
for (ulus = 0; ulus < produkte.length; ulus++) {
  console.log(`4---${produkte[ulus].toUpperCase()}`);
}

// 5- Wie viele Produkte von Samsung sind in der Produktliste enthalten?

// let arr =[];
// for(i =0; i<produkte.length; i++){
//   if(produkte[i].includes("samsung")){
//     arr.push(produkte[i])
//   }
// }
// console.log(arr.length)

let stuck = 0;
for (i = 0; i < produkte.length; i++) {
  if (produkte[i].includes("samsung")) {
    stuck++;
  }
}
console.log(`5---${stuck}`);

let schüler = [
  { name: "alex", nachname: "captain", not: [60, 70, 60] },
  { name: "ryan", nachname: "müller", not: [80, 70, 80] },
  { name: "mike", nachname: "scholz", not: [10, 20, 60] },
];

// 6- Drucken Sie den Notendurchschnitt und den Leistungsstatus jedes Schülers in der Schülerliste aus.
for (
  notendurchschnitt = 0;
  notendurchschnitt < schüler.length;
  notendurchschnitt++
) {
  console.log();
}

