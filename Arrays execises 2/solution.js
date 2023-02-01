// 1. Deklariere eine Variable namens `euroCities` und weise ihr ein Array mit 5 europäischen Städten zu, z.B. `["Paris", "London", "Valletta", "Prag", "Rom"]`. Deklariere eine weitere Variable mit dem Namen `secondCity` und weise ihr das zweite Element des Arrays als Wert zu.
const euroCities =["Paris", "London", "Buchholz", "Prag", "Rom"]
console.log(euroCities)
// 2. Ändere den ersten Eintrag im Array zu "Berlin".
const berlin =euroCities.splice(0,1,"Berlin")
console.log(`2-- Hier neu Stadt ${euroCities}`)
// 3. Gib die Länge des Arrays `euroCities` aus.
console.log(`3-- ${euroCities.length}`)
// 4. Entferne das letzte Element aus dem Array `euroCities`.
const entfernen = euroCities.pop()
console.log(`4-- ${euroCities}`)
// 5. Verwende eine Array-Methode, um "Budapest" an das Ende des Arrays `euroCities" anzuhängen.
const budapest=euroCities.splice(euroCities.length,0,"Budapest")
console.log(`5-- ${euroCities}`)
// 6. Erstelle eine weitere Variable mit dem Namen `asianCities` und weise ihr ein Array mit mindestens 5 Städten zu.
const asianCities =["Manila","Pekin","Pyongyang","Seul","Tokyo"]
console.log(`6-- ${asianCities}`)
// 7. Benutze eine Methode, um `euroCities` und `asianCities` in einem Array zu kombinieren. Speichere das Ergebnis in der neuen Variablen `WorldCities`.
const WorldCities =euroCities.concat(asianCities)
console.log(`7-- ${WorldCities}`)
// Kehr die Reihenfolge von `worldCities` um.
console.log(`8-- ${WorldCities.reverse()}`)
// 9. **Bonus**: Entferne den dritten Eintrag aus dem Array `euroCities`.
const dritteLöschen =euroCities.splice(2,1)
console.log(`9-- ${dritteLöschen}`)
// 10. **Bonus**: Benutze eine Array-Methode, um die Punkte 2 bis 4 aus dem Array `asianCities` auszuwählen und speichere sie in einer anderen Variable. 
const neuStadte =asianCities.slice(2,4)
console.log(`10-- ${neuStadte}`)
// 11. **Bonus**: Ersetze den 3. Eintrag im Array von `worldCities` durch "Toronto".
console.log(`11-- ${WorldCities.splice(2,1,"Toronto")}`)
// 12. **Bonus**: Entferne keine Elemente aus dem Array `worldCities`, sondern füge "Washington" an der zweiten Position ein.
console.log(`12-- ${WorldCities.splice(1,0,"Washington")}`)
// 13. **Bonus** Schreibe ein Programm, um alle Elemente des Ergebnisses (`worldCities`) zu einer Zeichenkette zu verbinden.
console.log(WorldCities.join())
















