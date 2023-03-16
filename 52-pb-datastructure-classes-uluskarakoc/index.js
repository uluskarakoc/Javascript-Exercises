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
    this.height = height;
    this.radius = radius;
  }
  getVolume() {
    return this.height * Math.PI * Math.pow(this.radius, 2);
  }
}
const volume = new Cylinder(6, 4);
console.log(volume.getVolume());
// #### 3. Tick Tock
result();

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  start() {
    this.render();
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
result();
// #### 4. TV-Klasse
class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }
  increaseVolume() {
    if (this.volume <= 100) {
      this.volume++;
      console.log("Volume", this.volume);
    }
  }
  decreaseVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log("Volume", this.volume);
    }
  }
  getNewChannel() {
    this.channel = Math.floor(Math.random() * 51);
    console.log(`Channel: ${this.channel}`);
  }
  resetTV() {
    if (this.volume !== 1 || this.channel !== 50) {
      this.channel = 1;
      this.volume = 50;
    }
  }
  getTVstatus() {
    return `Panasonic auf ${this.channel}, Lautstärke ${this.volume}`;
  }
}
