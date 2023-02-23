// 1. Überprüfe das Ergebnis von:

// - a) `isDogBetter AND isDogBetter`.

// - b) `isDogBetter OR isCatBetter`.

// - c) `NOT (isDogBetter AND isCatBetter)`.

const isDogBetter = true;
const isCatBetter = false;

console.log(isDogBetter && isDogBetter);
console.log(isDogBetter || isCatBetter);
console.log(!(isDogBetter && isDogBetter));

// 2. Deklariere drei weitere Variablen `atoms`, `sandGrains` und `starsInSky`. Gib diesen Variablen Zahlenwerte.
// - Weise `atoms` den Wert `15` zu, `sandGrains` den Wert `10` und `starsInSky` den Wert `2`.
const atoms = 15;
const sandGrains = 10;
const starsInSky = 2;

// - a) `atoms` größer ist als `starsInSky` UND `atoms` größer ist als `sandGrains`.
console.log(atoms > starsInSky && atoms >> sandGrains);
// - b) `atoms` NICHT gleich `sandGrains` ist.
console.log(atoms != sandGrains);
// - c) `starsInSky` kleiner als `atoms` ist ODER `starsInSky` größer als `atoms` ist.
console.log(starsInSky < atoms || starsInSky > atoms);
// - d) `atoms` gleich `starsInSky` ist ODER `atoms`NICHT gleich `sandGrains` ist.
console.log(atoms == starsInSky || atoms != sandGrains);
// - e) `atoms` größer als oder gleich 10 ist UND `sandGrains` kleiner als oder gleich 10  ist.
console.log(atoms>=10 && sandGrains<=10)
// - f) `atoms` multipliziert mit `starsInSky` kleiner als 100  ist ODER `atoms` multipliziert mit `sandGrains` größer als 100 ist.
console.log(atoms*starsInSky<100 || atoms*sandGrains>100)

