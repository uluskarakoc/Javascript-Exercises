let i = 1;
result = () => {
  console.log(`Result****${i++}`);
};

// 1. Deklariere eine boolesche Variable namens `isDog`. Schreibe einen Code, der je nach Wert von `isDog` einen Satz in der Konsole ausgibt. Wenn er wahr ist, gib 'pat, pat' aus, und wenn nicht, gib 'find me a dog to pat!' aus.
const isDog = true;
console.log(isDog ? "pat pat" : "find me a dog to pat!");
result();
// 2. Deklariere 2 Variablen namens `speedLimit` und `yourSpeed`. Weise speedLimit den Wert 50km/h zu. Wenn `yourSpeed` darüber liegt, soll der Satz "you're going too fast!" ausgegeben werden. Wenn die Geschwindigkeit niedriger ist als speedLimit, soll dieser Satz ausgegeben werden: 'You're driving below the speed limit, Oma'.
result();
const speedLimit = 50;
const yourSpeed = 60;
console.log(
  yourSpeed > speedLimit
    ? "you're going too fast!"
    : "You're driving below the speed limit, Oma"
);
// 3. Deklariere eine Variable namens `age`.  Schreibe einen Code, der je nach Alterswert einen Satz in der Konsole ausgibt. Wenn das Alter unter 16 Jahren liegt, soll der Satz "serve butter beer" ausgegeben werden. Andernfalls "serve beer".
result();
const age = 18;
console.log(age >= 18 ? "serve beer" : "serve butter beer");
// 4. Deklariere eine Variable namens `isStudent`. Schreibe einen Code, der je nach Wert der Variablen einen Satz auf der Konsole ausgibt. Bei true soll "Ticket costs €5,00" ausgegeben werden. Wenn false, "Ticket costs €12,00".
result();
const isStudent = true;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");
// 5. Deklariere eine Variable namens `okMarie`. Schreibe einen Code, der prüft, ob der Wert der Variable 'cake' ist - wenn ja, soll "Let them eat cake" ausgegeben werden. Wenn nicht, "Oh, bother".
result();
const okMarie = "cake";
console.log(okMarie === "cake" ? "Let them eat cake" : "Oh, bother");
// 6. Prüfe, ob die folgenden Zahlen gerade Zahlen sind. Verwende einen Ternär und wenn die Zahl gerade ist, z.B. `30`. sollte `30 is even` ausgegeben werden, sonst z.B. `31`: `31 is odd`
const num1 = 30
// * num2 = 939
// * num3 = 40.9
result();
console.log(num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`);
