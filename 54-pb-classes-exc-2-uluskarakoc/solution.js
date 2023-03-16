let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
result();
// #### 1. Mitarbeiter-Klasse
class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }
  generatePaySlip() {
    return `Employee ID: ${this.id}
Name: ${this.firstName} ${this.lastName}
Tax ID: ${this.taxId}
Pay: ${this.salary}`;
  }
}
const unternehmen= new Employee(42,"Ulus","Karakoc",56,2000000)
console.log(unternehmen.generatePaySlip());
// your code goes here
// good luck!
