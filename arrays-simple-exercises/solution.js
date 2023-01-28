// 1-Erstellen sie eine array die Elemente "Apfel,Birne,Banana,Erdbeere" haben?
const obst = ["Apfel", "Birne", "Banana", "Erdbeere"];
const gemüse =["Lauchzwiebeln","Gurken","Bohnen","Kürbis"]

// 2.Wie viele Elemente hat das Array?
console.log(obst.length);

// 3-was ist Erste und letze Elemente von array?
const erste = obst[0];
console.log(erste);
// letzte elemente
const letzte = obst[obst.length - 1];
console.log(letzte);

// 4-Ist der Apfel einen Elemente von Array?
console.log(obst.includes("Apfel"));

// 5-Fügen Sie ein Elemente, die Kirsche nennt in letztem Platz in Array?
// const kartofel = obst[obst.length] ="kartofel";
console.log(obst.push("Kirsche")); /*length i verir*/
console.log(obst); /*yeni eklenen elemanla beraber yazar*/

// 6- Löschen Sie die letze 2 Elemente von Array?
// console.log(obst.pop());
// console.log(obst.pop());
let löschen2Elemente =obst.splice(obst.length-2,2)
console.log(` wir haben letzte 2 Elemente ${löschen2Elemente} gelöscht`);

// 7-Verstecken Sie die unten genannte Elemente in ein Array und Berechnen Sie das Alter der einzelnen Schülerin?
const schüler1 = [
    "Adam Sandler",
     2010, 
    [70,60,80]
    ];
const schüler2 = [
    "Nicolas Cage", 
    2012,
    [80,80,90]
    ];
const schüler3 = [
    "Ryan Gosling",
     2009, 
     [60,60,70]
    ];

// Schüler 1: Adam Sandler 2010 (70,60,80)
const jetzt = new Date().getFullYear();
const schüler1Alt = jetzt - schüler1[1];
console.log(schüler1Alt);

// Schüler 2: Nicolas Cage 2012 (80,80,90)
const schüler2Alt = jetzt - schüler2[1];
console.log(schüler2Alt);

// Schüler 3: Ryan Gosling 2009 (60,60,70))
const schüler3Alt = jetzt - schüler3[1];
console.log(schüler3Alt);

// 8- Fügen Sie am anfang das Element Ananas innerhalb Array?
const ananas =obst.unshift("Ananas");
console.log(`Hier wird ${obst} eingefügt` )

// 9-Zeigen Sie das Element das in 3. index ist?
const index3 =obst.at(3);
console.log(`Dirtte Element ist ${index3}`);

// 10-Führen Sie Obst und Gemüse zusammen?
const zusammenFühren = obst.concat(gemüse);
console.log(`Hier haben obst und gemüse zusammengeführt => ${zusammenFühren} <=`)
