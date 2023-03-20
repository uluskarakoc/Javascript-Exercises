let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};
result();
// ## Task 1 - Key Value Pairs
const profileData={
    firstName:"Kerim",
    lastName:"Has",
    age:40,
    city:"Moskova",
    details: function (){
        return `${this.firstName} ${this.lastName} is ${this.age}years old and lives in ${this.city}`
    }

}
// ## Aufgabe 2 - Objektmethode
result();
console.log(profileData.details());

// console.log(profileData);