let zahlen = [1, 3, 5, 9, 2, 23, 56];

summe = 0;

for (let ulus = 0; ulus < zahlen.length; ulus++) {
  summe += zahlen[ulus];
}

// for(let ulus in zahlen){
//     summe += zahlen[ulus];
// }

// for (let ulus of zahlen) {
//   summe += ulus;
// }

console.log(summe);
