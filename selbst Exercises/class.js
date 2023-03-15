let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};


result();
class Animal2 {
  constructor(props) {
    this.species = props.species;
    console.log("Ich werde instanziiert");
  }
}

const dog2 = new Animal2({ species: "Hund" });
const cat2 = new Animal2({ species: "Katze" });

console.log(dog2.species); // "Hund"
console.log(cat2.species); // "Katze"
result();

class Animal3 {
  constructor(noise) {
    this.noise = noise;
  }

  playNoise() {
    console.log(this.noise);
  }
}

const dog3 = new Animal3("wuff!");

dog3.playNoise(); // "wuff!"

result();
class Product {
  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  saveToDatabase() {
    console.log(`Saving ${this.name} to database...`);
  }
}

const product1 = new Product("Widget", 10.99, "A great widget", "widget.jpg");
product1.saveToDatabase();

result();
//kleine Aufgabe
// - Füge eine neue Eigenschaft namens "fuel" hinzu
// - Füge eine MEthode names "isElectricCar" hinzu
// - diese gibt true zurück, wenn "fuel" den Wert "electric" hat (ansonsten false)
// - Erzeuge eine Instanz, mit dem Wert "electric" für "fuel"
// - Rufe die Methode "isElectricCar" in console.log auf
// - - console.log( myCar.isElectricCar() )
class Car {
  constructor(myName, myYear, myColor,fuel) {
    // *hier muss etwas passieren*
    this.name = myName;
    this.year = myYear;
    this.color = myColor;
    this.kraftStoff=fuel;
    // *hier muss etwas passieren*
  }
   // *hier muss etwas passieren*
  isElectricCar(){
return this.kraftStoff==="electric"
  }
}
const lernenClass=new Car("Rolls-Royce",2023,"krem","benzin")
console.log(lernenClass.isElectricCar());
// *Hier eine Instanz erzeugen*


// *Dann isElectricCar in der console aufrufen*
result();
class Animal {
  constructor(species, yearOfBirth) {
    this.animal = species;
    this.year = yearOfBirth;
  }
  makeSound() {
    console.log(`${this.animal} macht ein lautes Geräusch`);
  }
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

let myAnimal = new Animal("dog", 2015);
let myAnimal2 = new Animal("cat", 2018);

myAnimal.makeSound();
myAnimal2.makeSound();
console.log(myAnimal.getAge());
console.log(myAnimal2.getAge());
console.log(`My Animal ist ${myAnimal2.getAge()} jahre alt `);
result();

// Bonus II für Animal (schwer)
// Erstelle ein neues Array, in das du mindestens drei Instanzen von Animal packst
// alle drei sollen ein unterschiedlichen Geburtstdatum haben
// Sortiere das Array anschließend mittels sort nach dem Alter

const animalArr = [myAnimal,
    new Animal("Dog", 2020), 
    new Animal("Cat", 2010),
    new Animal("Bird", 2019)
   ];

console.log( animalArr[3] ) // => Animal { species: 'Bird', yearOfBirth: 2019 }
animalArr.sort( (animalA, animalB) => animalA.yearOfBirth - animalB.yearOfBirth )


