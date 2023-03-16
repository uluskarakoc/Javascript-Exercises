let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
// Erstelle eine neue Klasse "Teacher"
// Diese soll von Person erben
// Zusätzlich soll Teacher eine neue Methode "callStudent(studentName)"
//   Diese Methode soll einen String ausgeben "[StudentNAme] sofort zur Tafel!"

// Erzeuge einen neuen Teacher und rufe greet(...) und callStudent(...) auf

// Person Class
class Person {
  // Erstelle einen Konstruktor, der drei Parameter annimmt
  constructor(name, age, gender) {
    // Weise die Parameter den Eigenschaften zu
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet(somebodyElse) {
    // Gib eine Begrüßungsnachricht mit dem Namen und dem anderen Namen aus
    console.log(`Hello, ${somebodyElse}. I'm ${this.name}.`);
  }

}
result();
class Teacher extends Person{
    callStudent(studentName){
        return `${studentName} sofort zur Tafel!`
    }
}
const myTeacher=new Teacher("liam",32,"male")
console.log(myTeacher.callStudent("ulus"));
myTeacher.greet("ali");