let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
result()
class Person{
    constructor(str,age){
        this.name=str;
        this.age=age;
    }
    describe(){
     return `${this.name} ${this.age} years old`   
    }
}
const ergebnis= new Person("John",19)
console.log(ergebnis.describe());