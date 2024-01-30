let i = 1;
result = () => {
  console.log(`Resulttttttt **** ${i++}`);
};
let u = 1;
corerefresh = () => {
  console.log(`corerefresh **** ${u++}`);
};
//   Array Methods
// Length
corerefresh();
const clothing = ["shoes", "shirts", "socks", "sweaters"];
console.log(clothing.length);
// Array.at
corerefresh();
const array1 = [5, 12, 8, 130, 44];
console.log(array1.at(2));
// concat
corerefresh();
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, "Ulus", "9"];
const numbers = num1.concat(num2, num3);
console.log(numbers);
// copyWithin
corerefresh();
const array2 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
console.log(array2.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index 1 all elements from index 3 to the end
console.log(array2.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
// entries
corerefresh();
const array3 = ["a", "b", "c"];
const iterator1 = array3.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
// every
corerefresh();
function isBigEnough(element, index, array) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough));
console.log([12, 54, 18, 130, 44].every(isBigEnough));
// fill
corerefresh();
// filter
corerefresh();
// find
corerefresh();
// findIndex
corerefresh();
// findLast
corerefresh();
// findLastIndex
corerefresh();
// flat
corerefresh();
// flatMap
corerefresh();
// forEach
corerefresh();
// from
corerefresh();
// fromAsync
corerefresh();
// includes
corerefresh();
// indexOf
corerefresh();
// Array.isArray
corerefresh();
// join
corerefresh();
// keys
corerefresh();
// lastIndexOf
corerefresh();
// map
corerefresh();
// Array.of
corerefresh();
// pop
corerefresh();
// push
corerefresh();
// reduce
corerefresh();
// reduceRight
corerefresh();
// reverse
corerefresh();
// shift
corerefresh();
// slice
corerefresh();
// some
corerefresh();
// sort
corerefresh();
// splice
corerefresh();
// toLocaleString()
corerefresh();
// toReversed()
corerefresh();
// toSorted()
corerefresh();
// toSpliced()
corerefresh();
// toString()
corerefresh();
// unshift()
corerefresh();
// values()
corerefresh();
// with()


















// 1. Deklariere eine Variable namens `euroCities` und weise ihr ein Array mit 5 europäischen Städten zu, z.B. `["Paris", "London", "Valletta", "Prag", "Rom"]`. Deklariere eine weitere Variable mit dem Namen `secondCity` und weise ihr das zweite Element des Arrays als Wert zu.
result();
const euroCities = ["Paris", "London", "Buchholz", "Prag", "Rom"];
const secondCity = euroCities[1];
const metin =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// 2. Ändere den ersten Eintrag im Array zu "Berlin".
result();
const newArray = euroCities.splice(0, 1, "Berlin");
// console.log(newArray);
console.log(euroCities);

// 3. Gib die Länge des Arrays `euroCities` aus.

// 4. Entferne das letzte Element aus dem Array `euroCities`.

// 5. Verwende eine Array-Methode, um "Budapest" an das Ende des Arrays `euroCities" anzuhängen.

// 6. Erstelle eine weitere Variable mit dem Namen `asianCities` und weise ihr ein Array mit mindestens 5 Städten zu.

// 7. Benutze eine Methode, um `euroCities` und `asianCities` in einem Array zu kombinieren. Speichere das Ergebnis in der neuen Variablen `WorldCities`.

// Kehr die Reihenfolge von `worldCities` um.

// 9. **Bonus**: Entferne den dritten Eintrag aus dem Array `euroCities`.

// 10. **Bonus**: Benutze eine Array-Methode, um die Punkte 2 bis 4 aus dem Array `asianCities` auszuwählen und speichere sie in einer anderen Variable.

// 11. **Bonus**: Ersetze den 3. Eintrag im Array von `worldCities` durch "Toronto".

// 12. **Bonus**: Entferne keine Elemente aus dem Array `worldCities`, sondern füge "Washington" an der zweiten Position ein.

// 13. **Bonus** Schreibe ein Programm, um alle Elemente des Ergebnisses (`worldCities`) zu einer Zeichenkette zu verbinden.
