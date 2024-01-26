let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};
// 1. Declare a variable named `parkWalkStr` with the value "I can walk in the park all day!". Print the word "park" to the console.
result();
const parkWalkStr = "i can walk in the park all day!";
console.log(parkWalkStr.slice(18, 22));
console.log(parkWalkStr.indexOf("park"));
console.log(
  parkWalkStr.slice(
    parkWalkStr.indexOf("park"),
    parkWalkStr.indexOf("park") + 4
  )
);
// 2. Declare a variable named `helloStr` with the value "Hello World". Covert the value to upper case and print the converted value to the console.
result();
const helloStr = "Hello World";
console.log(helloStr.toUpperCase());
// 3. Declare another variable named `earthlingsStr` with the value "Hello Earthling". Convert the value to lower case and print the converted value to the console.
result();
const earthlingsStr = "Hello Earthling";
console.log(earthlingsStr.toLowerCase());
// 4. Declare a variable named `jsStr` with the value "JavaScript". Use a string method to print the characters "aSc" from your declared variable.
result();
const jsStr = "JavaScript";
console.log(jsStr.slice(jsStr.indexOf("aSc"), jsStr.indexOf("aSc") + 3));
// 5. Deklariere eine Variable namens `niceShoesStr` mit dem Wert "nice shoes". Prüfe mit einer String-Methode, ob der Satz "nice shoes" die Buchstaben l oder n enthält. Gib das Ergebnis jeder Prüfung auf der Konsole aus.
result();
const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));
// 6. Erstelle eine Variable namens `oldStr` und weise ihr ein Wort deiner Wahl als Wert zu. Erstelle eine weitere Variable mit dem Namen `newStr` und weise ihr als Wert den Wert von `oldStr` zu, wobei das erste Zeichen der Zeichenkette vorne und hinten hinzugefügt wird, z.B.: Bananen => BBananenB
result();
const oldStr = "Buchholz";
const newStr = oldStr.substring(0,1) + oldStr + oldStr.substring(0,1) ;
console.log(newStr);
// 7. Erstelle eine Variable mit dem Namen `scritcherStr` und weise ihr ein Wort deiner Wahl mit mindestens 3 Zeichen als Wert zu. Erstelle eine weitere Variable mit dem Namen `lastThreeChars` und benutze eine String-Methode, um die letzten 3 Zeichen von `scritcherStr` zu erhalten und sie als Wert der neuen Variable zuzuweisen. Füge den Wert von `lastThreeChars` an den Anfang **und** das Ende von `scritcherStr` hinzu und gib das Ergebnis auf der Konsole aus, erwartete Ausgabe: Scritch => tchScritchtch

// 8. Erstelle eine Variable namens `boogieNightsStr` und weise ihr ein Wort deiner Wahl mit mindestens 2 Zeichen als Wert zu. Tausche die Stellen des ersten und letzten Buchstabens und gib das Ergebnis auf der Konsole aus, erwartete Ausgabe: BoogieWoogie => eoogieWoogiB
// let boogieNightsStr ="bremer";
// let b = boogieNightsStr.replace(("b","r"),("r","b"));
// console.log(b)

// 9. Erstelle 3 Variablen mit den Namen `firstName`, `city` und `job` und weise ihnen String-Werte zu, d.h. `const firstName = "Maria"; const city = "Berlin", usw. Gib mit Hilfe der Variablen und der String-Interpolation einen Satz auf der Konsole aus, z. B.: "Mein Name ist Maria. Ich wohne in Berlin und bin Lehrerin".

// 10. Deklariere eine Variable namens `foxStr` und weise ihr den Wert "the quick brown fox" zu (alles in Kleinbuchstaben). Schreibe den ersten Buchstaben der Zeichenkette groß. Gib das Ergebnis auf der Konsole aus.
