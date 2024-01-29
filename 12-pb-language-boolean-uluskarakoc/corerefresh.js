let i = 1;
result = () => {
  console.log(`Result **** ${i++}`);
};

// 1- Complete the following code to print out 'good evening' using 'myVar':
result();
const myVar = true;
console.log(!myVar ? "good morning" : "good evening");
// 2-Prüfe, ob 3 gleich "3" ist, indem du den losen Vergleich verwendest. Prüfe dann, ob sie gleich sind, indem du den strengen Vergleich verwendest. Fragen: Kommentiere deine Antworten in der js-Datei.
result();
console.log(3 == "3");
console.log(3 === "3");
// 3-Speichere den Wert true in einer Variablen. Drucke mit einem ternären Operator die Option false aus, indem du den Wert der Ausgangsvariablen prüfst.
result();
const variable = true;
console.log(!variable ? "Ulus" : "Karakoc");
// 4-Was wird bei dem unten stehenden Code gedruckt, wenn wir name in die Konsole eingeben? Kommentiere deine Antwort in der js-Datei.
result();
let firstName, givenName;

firstName = "Stacey";
let name = givenName || firstName || "John";

console.log(name);  /*Stacey*/
