// #### 1. Welcher Typ?
// * Prüfe, ob `3` gleich `"3"` ist, indem du den losen Vergleich verwendest. Prüfe dann, ob sie gleich sind, indem du den strengen Vergleich verwendest.
console.log(3 == "3")
console.log(3 === "3")
/*console.log(3 = "3")*/   /*invalid*/

// #### 2. Nicht
// * Speichere den Wert `true` in einer Variablen. Drucke mit einem ternären Operator die Option `false` aus, indem du den Wert der Ausgangsvariablen prüfst.

let aufgabe =(true) ?"ulus": "karakoc"
console.log(aufgabe)


// #### 3. Kurzschluss
// Was wird bei dem unten stehenden Code gedruckt, wenn wir `name` in die Konsole eingeben? Kommentiere deine Antwort in der js-Datei.

let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);  

// Stacey

