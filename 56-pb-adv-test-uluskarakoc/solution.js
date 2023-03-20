let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};
result();
// ## Task 1 - Key Value Pairs
const profileData = {
  firstName: "Kerim",
  lastName: "Has",
  age: 40,
  city: "Moskova",
};
// ## Aufgabe 2 - Objektmethode
result();
profileData.details = () => {
  return `${profileData.firstName} ${profileData.lastName} is ${profileData.age} years old and lives in ${profileData.city}`;
};
console.log(profileData.details());

// ## Aufgabe 3 - Wortkonverter
result();
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
const wordConverter = (words, suffix) => {
  for (let i = 0; i < words.length; i++) {
    console.log(words[i] + suffix);
  }
};
wordConverter(adjectives, "er");
// ## Task 4 - Hour Calculation
result();
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];
const calculateHours = (hours) => {
  let sum = 0;
  hours.forEach((n) => {
    sum += n.end - n.start;
  });
  return sum;
};
console.log(calculateHours(hourTracking));
// ## Aufgabe 5 - Klassen
result();
class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }
  spaceNeeded() {
    console.log(`We need ${2 * this.number} quadratmeter area for a class`);
  }
  details() {
    console.log(
      `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`
    );
  }
}
const kurs = new Course("Mosh", "web development", 15);
kurs.spaceNeeded();
kurs.details();
// ## Task 6 - Input validation
