let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
result();
class Person {
  constructor(str, age) {
    this.name = str;
    this.age = age;
  }
  describe() {
    return `${this.name} ${this.age} years old`;
  }
}
const ergebnis = new Person("John", 19);
console.log(ergebnis.describe());
result();
// #### 2. Volume
class Cylinder {
  constructor(height, radius) {
    this.height=height;
    this.radius=radius;
  }
  getVolume() {
    return  this.height*Math.PI*Math.pow(this.radius,2)
  }
}
const volume= new Cylinder(6,4)
console.log(volume.getVolume());
