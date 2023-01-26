// 1. Declare a variable named `parkWalkStr` with the value "I can walk in the park all day!". Print the word "park" to the console.
let parkWalkStr = "I can walk in the park all day!"
console.log(parkWalkStr.slice(parkWalkStr.indexOf("park"),parkWalkStr.indexOf("park") +4));

// 2. Declare a variable named `helloStr` with the value "Hello World". Covert the value to upper case and print the converted value to the console.
let helloStr ="Hello World"
console.log(helloStr.toUpperCase());

// 3. Declare another variable named `earthlingsStr` with the value "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
let earthlingsStr = "Hello Earthling";
console.log(earthlingsStr.toLocaleLowerCase());

// 4. Declare a variable named `jsStr` with the value "JavaScript". Use a string method to print the characters "aSc" from your declared variable.
let jsStr = "JavaScript";
console.log(jsStr.substring(3,6));

// 5. Deklariere eine Variable namens `niceShoesStr` mit dem Wert "nice shoes". Prüfe mit einer String-Methode, ob der Satz "nice shoes" die Buchstaben l oder n enthält. Gib das Ergebnis jeder Prüfung auf der Konsole aus.
let niceShoesStr ="nice shoes";
console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));


// 6. Erstelle eine Variable namens `oldStr` und weise ihr ein Wort deiner Wahl als Wert zu. Erstelle eine weitere Variable mit dem Namen `newStr` und weise ihr als Wert den Wert von `oldStr` zu, wobei das erste Zeichen der Zeichenkette vorne und hinten hinzugefügt wird, z.B.: Bananen => BBananenB
let oldStr="ulus";
let newStr =oldStr[0]+ oldStr.substring(0)+ oldStr[0];
console.log(`burada" ${newStr}`);

// 7. Erstelle eine Variable mit dem Namen `scritcherStr` und weise ihr ein Wort deiner Wahl mit mindestens 3 Zeichen als Wert zu. Erstelle eine weitere Variable mit dem Namen `lastThreeChars` und benutze eine String-Methode, um die letzten 3 Zeichen von `scritcherStr` zu erhalten und sie als Wert der neuen Variable zuzuweisen. Füge den Wert von `lastThreeChars` an den Anfang **und** das Ende von `scritcherStr` hinzu und gib das Ergebnis auf der Konsole aus, erwartete Ausgabe: Scritch => tchScritchtch
let scritcherStr= "ulus";
let lastThreeChars=scritcherStr.slice(-3);
console.log(lastThreeChars+scritcherStr+lastThreeChars);

// 8. Erstelle eine Variable namens `boogieNightsStr` und weise ihr ein Wort deiner Wahl mit mindestens 2 Zeichen als Wert zu. Tausche die Stellen des ersten und letzten Buchstabens und gib das Ergebnis auf der Konsole aus, erwartete Ausgabe: BoogieWoogie => eoogieWoogiB
// let boogieNightsStr ="bremer";
// let b = boogieNightsStr.replace(("b","r"),("r","b"));
// console.log(b)
const boogieNightsStr = "BoogieWoogie";
const firstLetter = boogieNightsStr[0];
const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
const remainderString = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
console.log(lastLetter + remainderString + firstLetter);

// 9. Erstelle 3 Variablen mit den Namen `firstName`, `city` und `job` und weise ihnen String-Werte zu, d.h. `const firstName = "Maria"; const city = "Berlin", usw. Gib mit Hilfe der Variablen und der String-Interpolation einen Satz auf der Konsole aus, z. B.: "Mein Name ist Maria. Ich wohne in Berlin und bin Lehrerin".
let firstName ="ulus";
let city ="hamburg";
let job ="lehrer";
console.log(`mein name ist ${firstName}. ich wohne in ${city} und bin ${job}`);

// 10. Deklariere eine Variable namens `foxStr` und weise ihr den Wert "the quick brown fox" zu (alles in Kleinbuchstaben). Schreibe den ersten Buchstaben der Zeichenkette groß. Gib das Ergebnis auf der Konsole aus.
let foxStr = "the quick brown fox";
console.log(foxStr.toUpperCase()[0]+foxStr.slice(1,20))

