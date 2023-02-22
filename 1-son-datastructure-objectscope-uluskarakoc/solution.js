// **Anweisungen**
// 1---------
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  printDetails() {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " is a student in class " +
        this.class
    );
  },
};

student.printDetails();
// 2---------

let person = {
  firstName: "Ulus",
  lastName: "Karakoc",
  age: 32,
  job: "Web Entwickler",
  city: "Buchholz",
  printDetails: function () {
    console.log(
      this.firstName +
        this.lastName +
        " is a " +
        this.age +
        " year old " +
        this.job +
        " living in " +
        this.city
    );
  },
};
person.printDetails();

/*3. Füge eine Methode hinzu, um die Länge des Objekts `person` zu ermitteln.
 */
// Lösung 1:
console.log(Object.keys(person).length);
console.log(Object.values(person).length);
// Lösung 2:
let keys = [];
for (let key in person) {
  keys.push(key);
}
console.log(keys.length);
//Lösung 3:
let size = 0;
for (let key in person) {
  size++;
}

// For Schleife default: Startwert, Endwert, Increment
for (let index = 0; index < 7; index++) {
  array[index];
}
// For Schleife fuer Objecte: Startwert 0, Endwert: object länge, increment 1

//For Schleife fuer Array: Startwert 0, Endwert array.length, increment 1
