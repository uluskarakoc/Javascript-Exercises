let i = 1;
const result = () => {
  console.log(`Result****${i++}`);
};

// 1) Berechne die durchschnittliche Punktzahl für jedes Team und weise sie den Variablen `aleezaTeamAve` und `laraTeamAve` zu.
result();
const aleezaTeamAve = (89 + 120 + 103) / 3;
const aleezaTeamAve2 = (200 + 120 + 103) / 3;
const laraTeamAve = (116 + 94 + 123) / 3;
const maryTeamAve = (200 + 134 + 105) / 3;
const maryTeamAve2 = (184 + 134 + 105) / 3;

console.log(aleezaTeamAve);
console.log(laraTeamAve);
// 2) Schreibe eine Bedingung, die Folgendes im Terminal ausgibt, wenn Lara's Team gewinnt: _"Lara's team is the winner with an average score of ...."_ oder, wenn Aleeza's Team gewinnt: _"Aleeza's team is the winner with an average score of  ...."_ oder, wenn es ein Unentschieden ist "It's a tie with an average score of ....", je nachdem, welches Team die höhere Durchschnittspunktzahl hat oder im Falle eines Unentschiedens. Vergiss nicht, die tatsächliche Durchschnittspunktzahl in deiner Antwort anzugeben (fülle die .... aus).
result();
if (laraTeamAve > aleezaTeamAve) {
  console.log(
    `Lara's team is the winner with an average score of ${laraTeamAve}`
  );
} else if (aleezaTeamAve > laraTeamAve) {
  console.log(
    `Aleeza's team is the winner with an average score of ${aleezaTeamAve}`
  );
} else if (laraTeamAve === aleezaTeamAve) {
  console.log(`It's a tie with an average score of ${aleezaTeamAve}`);
}
// 3) Ändere dann die Punktzahl von Aleezas erstem Spiel von *89* auf *200* und berechne den neuen Durchschnitt, weise ihn der neuen Variablen `aleezaTeamAve2` zu und schreibe eine neue Bedingung (ähnlich der vorherigen), um `aleezaTeamAve2` mit `laraTeamAve` zu vergleichen.
result();
if (laraTeamAve > aleezaTeamAve2) {
  console.log(
    `Lara's team is the winner with an average score of ${laraTeamAve}`
  );
} else if (aleezaTeamAve2 > laraTeamAve) {
  console.log(
    `Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`
  );
} else if (laraTeamAve === aleezaTeamAve2) {
  console.log(`It's a tie with an average score of ${aleezaTeamAve2}`);
}
// - 4) Mary spielt auch Basketball, und ihr Team hat *200*, *134* und *105* Punkte erzielt. Wie zuvor gibst du den durchschnittlichen Sieger (`laraTeamAve`, `aleezaTeamAve2` oder `maryTeamAve`) in die Konsole aus (falls 2 Teams den gleichen Punktestand haben, gibst du Folgendes aus: _"....'s team and ....'s team are tied for first place with an average score of ...."_, falls alle 3 Teams gleichauf sind: _"All three teams are tied with an average score of  ...."_, nachdem du die Leerstellen mit den Namen der Teams gefüllt hast.... )
result();
if (laraTeamAve === maryTeamAve) {
  console.log(
    `${laraTeamAve}'s team and ${maryTeamAve}s team are tied for first place with an average score of ${laraTeamAve}`
  );
} else if ((laraTeamAve === maryTeamAve) === aleezaTeamAve2) {
  console.log(
    `All three teams are tied with an average score of  ${maryTeamAve}`
  );
} else if (laraTeamAve === aleezaTeamAve2) {
  console.log(
    `All three teams are tied with an average score of  ${maryTeamAve}`
  );
} else if (laraTeamAve === maryTeamAve) {
  console.log(
    `All three teams are tied with an average score of  ${maryTeamAve}`
  );
} else if (aleezaTeamAve2 === maryTeamAve) {
  console.log(
    `All three teams are tied with an average score of  ${maryTeamAve}`
  );
} else {
  console.log("Keine Equal");
}
// - 5) Ändere wie zuvor die Punktzahl von Marys erstem Spiel von *200* auf *184*, um verschiedene Gewinner zu erzeugen, weise den neuen Durchschnitt `maryTeamAve2` zu und schreibe die Bedingung neu, wobei du berücksichtigen solltest, dass es ein Unentschieden geben kann.
result();
// Yukaridakilerden cok farki yoktu bu yüzden atliyorum bu ödevi.