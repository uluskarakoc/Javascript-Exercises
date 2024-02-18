let i = 1;
result = () => {
  console.log(`Resulttttttt **** ${i++}`);
};

// 1. Deklariere eine Variable namens `euroCities` und weise ihr ein Array mit 5 europäischen Städten zu, z.B. `["Paris", "London", "Valletta", "Prag", "Rom"]`. Deklariere eine weitere Variable mit dem Namen `secondCity` und weise ihr das zweite Element des Arrays als Wert zu.
result();
const euroCities = ["Paris", "London", "Buchholz", "Prag", "Rom"];
const secondCity = euroCities[1];
console.log(secondCity);
// 2. Ändere den ersten Eintrag im Array zu "Berlin".
result();
euroCities.splice(0, 1, "Berlin");
console.log(euroCities);
// 3. Gib die Länge des Arrays `euroCities` aus.
result();
console.log(euroCities);
// 4. Entferne das letzte Element aus dem Array `euroCities`.
result();
const letzteElement = euroCities.pop();
console.log(euroCities);
// 5. Verwende eine Array-Methode, um "Budapest" an das Ende des Arrays `euroCities" anzuhängen.
result();
euroCities.splice(euroCities.length, 0, "Budapest");
console.log(euroCities);
// 6. Erstelle eine weitere Variable mit dem Namen `asianCities` und weise ihr ein Array mit mindestens 5 Städten zu.
result();
const asianCities = ["Osh", "Tokmok", "Bishkek", "Talas", "Karakol"];
// 7. Benutze eine Methode, um `euroCities` und `asianCities` in einem Array zu kombinieren. Speichere das Ergebnis in der neuen Variablen `WorldCities`.
result();
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);
// 8.  Kehr die Reihenfolge von `worldCities` um.
result();
console.log(worldCities.reverse());
// 9. **Bonus**: Entferne den dritten Eintrag aus dem Array `euroCities`.
result();
console.log(euroCities.splice(2,1));
console.log(euroCities);
// 10. **Bonus**: Benutze eine Array-Methode, um die Punkte 2 bis 4 aus dem Array `asianCities` auszuwählen und speichere sie in einer anderen Variable.
result();
const neuArray = asianCities.slice(2,4)
console.log(neuArray);
// 11. **Bonus**: Ersetze den 3. Eintrag im Array von `worldCities` durch "Toronto".
result();
console.log(worldCities.splice(2,1,"Toronto"));
console.log(worldCities);
// 12. **Bonus**: Entferne keine Elemente aus dem Array `worldCities`, sondern füge "Washington" an der zweiten Position ein.
result();
console.log(worldCities.splice(1,0,"Washington"));
console.log(worldCities);
// 13. **Bonus** Schreibe ein Programm, um alle Elemente des Ergebnisses (`worldCities`) zu einer Zeichenkette zu verbinden.
result();
console.log(worldCities.join(", "));