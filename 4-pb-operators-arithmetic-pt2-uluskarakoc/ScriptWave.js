// 0. Erstelle zwei Variablen `snackServings` und `guests` und weise ihnen Zahlenwerte zu.
const snackServings = 4;
const guests = 7;
// 1. Gib die Summe von `snackServings` und `guests` aus.
console.log(snackServings + guests);
// 2. Gib das Ergebnis der Subtraktion von `guests` von `snackServings` aus. Gib dann das Ergebnis der Subtraktion von `snackServings` von `guests` aus.
console.log(snackServings - guests);
console.log(guests - snackServings);
// 3. Multipliziere `snackServings` mit `guests`. Gib das Ergebnis aus.
console.log(snackServings * guests);
// 4. Teile `snackServings` durch `guests`. Gib das Ergebnis aus.
console.log(snackServings / guests);

// 5. Erstelle eine weitere Variable `drinks` mit dem Wert `10`. Multipliziere `SnackServings` und `guests`. Teile dann das Ergebnis durch `drinks`. Speichere das Ergebnis in einer neuen Variablen mit dem Namen `resultOne`. Gib `resultOne` in der Konsole aus.
const drinks = 10;
const resultOne = (snackServings * guests) / drinks;
console.log(`resultOne : ${resultOne}`);
// 6. Deklariere zwei Variablen: "monkeys" mit dem Wert 15 und "bananas" mit dem Wert 9. Teile monkeys durch die bananas. Gib das Ergebnis aus.
const monkeys =15
const bananas = 9
console.log(monkeys/bananas);
// 7. Erstelle eine weitere Variable "monkeyfights" mit dem Wert 20. Addiere monkeys und bananas und multipliziere dann das Ergebnis mit monkeyfights. Speichere das Ergebnis in der Variablen "resultTwo".  Gib "resultTwo" in der Konsole aus.
const monkeyfights = 20
const moBa = monkeys + bananas
const resultTwo = moBa * monkeyfights
console.log(resultTwo);
// 8. Erstelle eine Variable namens "monkeyBusiness" mit dem Wert "90". Erhöhe "monkeyBusiness" um 1.
const monkeyBusiness = 90 
console.log(monkeyBusiness +1 );
// 9. Erstelle eine Variable namens `boredom` mit dem Wert `13` Verringere `boredom` um 1.
const boredom = 13
console.log(boredom -1);
// 10. Ziehe bananas von monkeys ab und speichere das Ergebnis in einer neuen Variable "happiness". Addiere "happiness" und "monkeyfights" und gib das Ergebnis aus.
const happiness = monkeys - bananas
console.log(happiness + monkeyfights);
// Gib den Rest der Division von "resultOne" durch "resultTwo" in der Konsole aus.
console.log(resultOne/resultTwo);