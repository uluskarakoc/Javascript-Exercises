let i = 1;
const result = () => {
  console.log(` Result****${i++}`);
};
const zahlen = [-1, 0, 1, 2, 3, 4];
// Gib die niedrigste Zahl zwischen -1 und 4 aus.
result();
console.log(Math.min(...zahlen));
// Gib die höchste Zahl zwischen -1 und 4 aus.
result();
console.log(Math.max(...zahlen));
// Runde jede der folgenden Zahlen auf die nächste ganze Zahl auf. Gib jedes Ergebnis in der Konsole aus.
result();
const zahlen1 = [3321.32321, 326.76, 76788.7, -9.78, 43.342];
console.log(
  Math.ceil(zahlen1[0]),
  Math.ceil(zahlen1[1]),
  Math.ceil(zahlen1[2]),
  Math.ceil(zahlen1[3]),
  Math.ceil(zahlen1[4])
);
// Runde jede der folgenden Zahlen auf die nächste ganze Zahl ab. Gib jedes Ergebnis in der Konsole aus.
result();
const zahlen2 = [3321.32321, 326.76, 76788.7, -9.78, 28.329];
console.log(
  Math.floor(zahlen2[0]),
  Math.floor(zahlen2[1]),
  Math.floor(zahlen2[2]),
  Math.floor(zahlen2[3]),
  Math.floor(zahlen2[4])
);
// Gib eine zufällige ganze Zahl zwischen 1 und 6 aus.
result();
console.log(Math.floor(Math.random()*6));
