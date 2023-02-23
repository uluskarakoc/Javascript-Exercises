// 1) Berechne die durchschnittliche Punktzahl für jedes Team und weise sie den Variablen `aleezaTeamAve` und `laraTeamAve` zu.
const aleezaTeamAve =(89+120+103)/3
const aleezaTeamAve2 =(200+120+103)/3
const laraTeamAve =(116+94+123)/3
const maryTeamAve=(200+134+105)/3
const maryTeamAve2=(184+134+105)/3

// 2) Schreibe eine Bedingung, die Folgendes im Terminal ausgibt, wenn Lara's Team gewinnt: _"Lara's team is the winner with an average score of ...."_ oder, wenn Aleeza's Team gewinnt: _"Aleeza's team is the winner with an average score of  ...."_ oder, wenn es ein Unentschieden ist "It's a tie with an average score of ....", je nachdem, welches Team die höhere Durchschnittspunktzahl hat oder im Falle eines Unentschiedens. Vergiss nicht, die tatsächliche Durchschnittspunktzahl in deiner Antwort anzugeben (fülle die .... aus).
if(aleezaTeamAve>laraTeamAve){
    console.log(`1-Lara's team is the winner with an average score of ${laraTeamAve}` )
}else if(laraTeamAve>aleezaTeamAve){
    console.log(`1-Aleeza's team is the winner with an average score of ${aleezaTeamAve}`)

} else{
    console.log(`1-It's a tie with an average score of ....`)
}

// 3) Ändere dann die Punktzahl von Aleezas erstem Spiel von *89* auf *200* und berechne den neuen Durchschnitt, weise ihn der neuen Variablen `aleezaTeamAve2` zu und schreibe eine neue Bedingung (ähnlich der vorherigen), um `aleezaTeamAve2` mit `laraTeamAve` zu vergleichen.
if(aleezaTeamAve2>laraTeamAve){
    console.log(`2-Lara's team is the winner with an average score of ${laraTeamAve}` )
}else if(laraTeamAve>aleezaTeamAve2){
    console.log(`2-Aleeza's team is the winner with an average score of ${aleezaTeamAve}`)

} else{
    console.log(`2- It's a tie with an average score of ....`)
}
// - 4) Mary spielt auch Basketball, und ihr Team hat *200*, *134* und *105* Punkte erzielt. Wie zuvor gibst du den durchschnittlichen Sieger (`laraTeamAve`, `aleezaTeamAve2` oder `maryTeamAve`) in die Konsole aus (falls 2 Teams den gleichen Punktestand haben, gibst du Folgendes aus: _"....'s team and ....'s team are tied for first place with an average score of ...."_, falls alle 3 Teams gleichauf sind: _"All three teams are tied with an average score of  ...."_, nachdem du die Leerstellen mit den Namen der Teams gefüllt hast.... )
if(aleezaTeamAve2==laraTeamAve){
    console.log(`3-${aleezaTeamAve2}'s team and ${laraTeamAve}'s team are tied for first place with an average score of .... ` )
}else if(laraTeamAve==aleezaTeamAve2==maryTeamAve){
    console.log(`3-All three teams are tied with an average score of ${aleezaTeamAve}`)

} else if(aleezaTeamAve2==maryTeamAve){
    console.log(`3-All three teams are tied with an average score of ${aleezaTeamAve}`)

} else if(laraTeamAve==maryTeamAve){
    console.log(`3-All three teams are tied with an average score of ${aleezaTeamAve}`)

} else{
    console.log(`3-keine equal`)
}
// - 5) Ändere wie zuvor die Punktzahl von Marys erstem Spiel von *200* auf *184*, um verschiedene Gewinner zu erzeugen, weise den neuen Durchschnitt `maryTeamAve2` zu und schreibe die Bedingung neu, wobei du berücksichtigen solltest, dass es ein Unentschieden geben kann.
if(aleezaTeamAve2>laraTeamAve){
    console.group(`4-Aleza2's team is the winner with an average score of ${aleezaTeamAve2}` )
}else if(laraTeamAve>maryTeamAve2){
    console.log(`4-Laras's team is the winner with an average score of ${laraTeamAve}`)

}else if(laraTeamAve>aleezaTeamAve2){
    console.log(`4-Aleeza's team is the winner with an average score of ${aleezaTeamAve}`)

}
 else{
    console.log(`4- It's a tie with an average score of ....`)
}