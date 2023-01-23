// write your code in this file

// Q1. An einem Abend werden in einem Kino Karten für 6450 Dollar verkauft. Jedes Ticket kostet 15 Dollar. Wie viele Karten wurden verkauft?
console.log("q1--------")
let allTicketVerkauf = "6450";
let ticketPreis = "15";
console.log(allTicketVerkauf / ticketPreis);
console.log(`Es wurden ${allTicketVerkauf/ticketPreis} tickets verkauft.`)
// output: 430

// Q2. Sylvias Einkommen beträgt 500 Dollar pro Woche. Wie viel verdient Sylvia im Jahr?
console.log("q2--------")
let sylviaWoche = "500";
let dieWocheImJahr = "52";
console.log(sylviaWoche * dieWocheImJahr);
console.log(`Sylvia verdient ${sylviaWoche*dieWocheImJahr} im Jahr`)
// output: 26000

//  Q3. Berechne den Prozentsatz von 17/30. Erwartete Ausgabe: "Q3: [number]%" (Das Ergebnis muss nicht gerundet werden)
console.log("q3--------")
let zahl1 = "17";
let zahl2 = "30";
let prozent = (zahl1/zahl2)*100
console.log(`Die Prozentsatz 17 von 30 ist ${prozent}`);
// output: 0.5666666666666667

// Q4. Berechne den Umfang eines Quadrats. Nimm an, dass jede Seite 4,75 cm lang ist.
console.log("q4--------")
let seiteVonQuadrat = "4.75";
let alleSeite = "4";
console.log(alleSeite * seiteVonQuadrat);
// output: 19

//  Q5. Berechne den Umfang eines Dreiecks. Nimm an, dass die Seitenlängen 5 cm, 6 cm und 7 cm sind.
console.log("q5--------")
let a = 5;
let b = 6;
let c = 7;
let umfang = a+b+c;
console.log(`der Umfang diese Dreiecks ist ${umfang}`);
// output: 18

//  Q6. Berechne den Flächeninhalt eines Quadrats. Jede Seite ist 5 cm lang.
console.log("q6--------")
let quadratSeite = 5;
console.log(quadratSeite * quadratSeite);
// output: 25

// Q7. Berechne den Flächeninhalt eines [rechtwinkligen Dreiecks](https://en.wikipedia.org/wiki/Right_triangle). Nimm an, dass die Seitenlängen 3 cm, 4 cm und 5 cm sind.
console.log("q7--------")
let height = 3;
let base = 4;
let formul = 0.5;
let flächenInhaltDreick = height*base*formul;
console.log(`der Flächeninhalt diese rechtwinkligen Dreieck ist ${flächenInhaltDreick}.`);
// output: 6

// Q8. Berechne das Volumen eines Würfels. Die Länge jeder Seite beträgt 9 cm.
console.log("q8--------")
let seiteWürfels = 9;
let volumeWürfel = Math.pow(seiteWürfels, 3)
console.log(`das Volume diese Würfel ist ${volumeWürfel}`);
// output: 729

// Q9. Berechne die drei Rechnungen inklusive Trinkgeld:
// - 22,35 € + 10% Trinkgeld
// - 26,67 € + 15% Trinkgeld
// - 35,92 € + 20% Trinkgeld
// Gib alle drei Ergebnisse in einem String in der Konsole aus
console.log("q9--------")
let ersteRechnung = 22.35;
let trinkGeld = ersteRechnung/10;
let ersteAntwort = ersteRechnung + trinkGeld
console.log(`Erste Antwort ist ${ersteAntwort}.`)

let zweiteRechnung = 26.67;
let trinkGeld2 = (zweiteRechnung/100)*15;
let zweiteAntwort = zweiteRechnung + trinkGeld2
console.log(`Zweite Antwort ist ${zweiteAntwort}.`)

let dritteRechnung = 35.92;
let trinkGeld3 = (dritteRechnung/100)*20;
let dritteAntwort = dritteRechnung + trinkGeld3
console.log(`Dritte Antwort ist ${dritteAntwort}.`)


// Q10. Noemy hat in den letzten zwei Wochen die folgenden Stunden gearbeitet: 8, 6, 5, 9, 8, 2, 1, 8,5, 7, 4
// Wie viele Stunden hat Noemy durchschnittlich pro Tag gearbeitet?
console.log("q10--------")
let t1 = 8;
let t2 = 6;
let t3 = 5;
let t4 = 9;
let t5 = 8;
let t6 = 2;
let t7 = 1;
let t8 = 8.5;
let t9 = 7;
let t0 = 4;
console.log(t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t0 ) / 10;


// Q11. Ein Mathe-Schüler hat in den ersten fünf Tests 75, 70, 85, 90 und 100 Punkte erzielt. Nach dem sechsten Mathetest liegt der Durchschnitt jetzt bei 85. Wie viele Punkte hat er im sechsten Test erreicht?
// Erwartete Ausgabe: "Q11: Score in the sixth test: --".
console.log("q11--------")

let ersteP = 75;
let zweieteP = 70;
let dritteP = 85;
let vierteP = 90;
let fünfteP = 100;
let funfPrufung = ersteP + zweieteP + dritteP + vierteP + fünfteP;
let durchschnittP = 85;
let prufungZahl = 6;
let summePrufung = prufungZahl * durchschnittP;
console.log(summePrufung - funfPrufung);

// Q12. Damit James einen Abschluss erster Klasse erhält, muss er in allen 9 Prüfungen einen Durchschnitt von 80% erreichen. Er hat 8 Prüfungen abgelegt und sein Durchschnitt liegt bei 78%. Welchen Prozentsatz muss er in seiner letzten Prüfung mindestens erreichen, damit er einen erstklassigen Abschluss erhält?
// Erwartetes Ergebnis: "Q12: James needs a minimum of --% to get an 80% average".
console.log("q12--------")

let achtPrüfungDurschnitt =78*8;
let neunPrüfungDurschnitt =80*9;
let neunteprüfung = neunPrüfungDurschnitt-achtPrüfungDurschnitt;
console.log(`James soll mindestens ${neunteprüfung} erhalten` )